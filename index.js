const express = require('express');
const db = require('./db.json');

const app = express();

/* get all objects */
app.get('/', (req, res) => {
    res.json(db);
});

/* get object by id */
app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.json(db.find(element => element.id === id));
});

app.listen(8081, () => {
    console.log("Started server in http://localhost:8081");
});