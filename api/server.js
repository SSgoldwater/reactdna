const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver('bolt://127.0.0.1:7687', neo4j.auth.basic('neo4j', 'Mapl3l3af!'));
const session = driver.session();

const api = express();

api.get("/todos", (req, res) => {
  const resultPromise = session.readTransaction(tx => tx.run(
    'MATCH (t:Todo)\
     RETURN t;'
  ));

  resultPromise.then(result => {
    session.close();

    const response = result.records.map(rec => ({
      id: rec._fields[0].identity.low,
      done: rec._fields[0].properties.done,
      content: rec._fields[0].properties.content
    }))

    res.send(response);
    driver.close();
  });
});

api.post("/todos/create", (req, res) => {
  const todo = req.body;

  const resultPromise = session.writeTransaction(tx => tx.run(
    `CREATE (t:Todo { content: "${todo.content}", done: ${todo.done} })\
     RETURN t;`
  ));

  resultPromise.then(result => {
    const response = result.records.map(rec => ({
      id: rec._fields[0].identity.low,
      done: rec._fields[0].properties.done,
      content: rec._fields[0].properties.content
    }))[0];

    session.close();
    res.send(response);
    driver.close();
  });
});

api.post("/todos/update", (req, res) => {
  const todo = req.body;

  const transaction = session.writeTransaction(tx => tx.run(
    `MATCH (t:Todo)\
     WHERE ID (t) = ${todo.id}\
     SET t.content = '${todo.content}', t.done = ${todo.done}\
     RETURN t`
  ));

  transaction.then(result => {
    const response = result.records.map(rec => ({
      id: rec._fields[0].identity.low,
      done: rec._fields[0].properties.done,
      content: rec._fields[0].properties.content
    }))[0];

    session.close();
    res.send(result);
    driver.close();
  });
});

api.post("/todos/delete/:id", (req, res) => {
  const id = req.params.id;

  const resultPromise = session.writeTransaction(tx => tx.run(
    `MATCH (t:Todo)\
     WHERE ID (t) = ${id}\
     DETACH\
     DELETE t;`
  ));

  resultPromise.then(result => {
    session.close();
    res.send({ id });
    driver.close();
  });
});

const app = express();

app.options('*', cors())
app.use(cors());
app.use(bodyParser.json());
app.use("/api", api);
app.listen(8088);
