const express = require("express")
const routes = require("../controllers");
const logger = require("morgan");


const React = require("react");

const PORT = process.env.PORT || 8000;

//making react global
globalThis.React = React;

const app = express();
app.use(express.json());

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(routes);

if (process.env.NODE_ENV !== 'production') {
    app.use(logger('dev'));
}

const db = require('../db/connection');

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
})