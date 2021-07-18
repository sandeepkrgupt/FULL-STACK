const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/MENApp';

const app = express();

mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;
con.on('open', () => {
    console.log('connected..')
});

const customRoute = require('./Router/menappRoute');
app.use('/details', customRoute); // this is a middleware.
app.listen(9000, () => {
    console.log('Server Started.')
});