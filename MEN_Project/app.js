/* 
M = Model or Schema
V = view or UI
C = controller or Router 
*/

/*
RDBMS = MONGODB
Database  = Database
Tables = collections
Rows = documents
Columns = Fields
*/

const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/MENApp';

const app = express();

mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;
con.on('open', () => {
    console.log('connected Successfully..')
});
app.use(express.json());//MIDDLEWARE
const customRoute = require('./Router/menappRoute');

app.use('/data', customRoute); // this is a middleware.
app.listen(9000, () => {
    console.log('Server Started.')
});
