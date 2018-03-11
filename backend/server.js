const express = require('express');
const bodyParser = require('body-parser');
const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver('bolt://127.0.0.1:7687', neo4j.auth.basic('neo4j', 'Mapl3l3af!'));
const session = driver.session();

const api = express();

api.get("/todos/all", (req, res) => {
  const resultPromise = session.readTransaction(tx => tx.run(
    'MATCH (t:Todo) RETURN t;'
  ));

  resultPromise.then(result => {
    session.close();
    res.send(result.records);
    driver.close();
  });
});

api.post("/todos/create", (req, res) => {
  const todo = req.body.todo;

  const resultPromise = session.writeTransaction(tx => tx.run(
    `CREATE (t:Todo { content: "${todo.content}", done: ${todo.done} }) RETURN t;`
  ));

  resultPromise.then(result => {
    session.close();
    res.send(result.records);
    driver.close();
  });
});

api.delete("/todos/delete/:id", (req, res) => {
  const resultPromise = session.writeTransaction(tx => tx.run(
    `MATCH (t:Todo) WHERE ID (t) = ${req.params.id} DETACH DELETE t;`
  ));

  resultPromise.then(result => {
    session.close();
    res.send(true);
    driver.close();
  });
});

const app = express();

app.use(bodyParser.json());
app.use("/api", api);
app.listen(8088);
