const express = require('express');
const bodyParser = require('body-parser');
const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver('bolt://127.0.0.1:7687', neo4j.auth.basic('neo4j', 'Mapl3l3af!'));
const session = driver.session();

const api = express();

api.get("/total-count", (req, res) => {
  const resultPromise = session.readTransaction(tx => tx.run(
    'MATCH (a:Counter) RETURN a;'
  ));

  resultPromise.then(result => {
    session.close();

    res.send(result.records.length.toString());

    driver.close();
  });
});

api.post("/add", (req, res) => {
  const resultPromise = session.writeTransaction(tx => tx.run(
    `CREATE (a:Counter {count:${parseInt(req.body.count) + 1}}) RETURN a;`
  ));

  resultPromise.then(result => {
    session.close();

    console.log(result.records);

    res.send(result.records);

    driver.close();
  });
});

api.post("/delete", (req, res) => {
  const resultPromise = session.writeTransaction(tx => tx.run(
    `MATCH (a:Counter {count:${parseInt(req.body.count)}}) DELETE a;`
  ));

  resultPromise.then(result => {
    session.close();

    console.log(result.records);
    res.send(result.records);

    driver.close();
  });
});

const app = express();

app.use(bodyParser.json());
app.use("/api", api);
app.listen(8088);
