/* eslint-disable indent */
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const engRoute = require('./routes/engRoutes');
const app = express();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://atarikaltunn:ux1i7AjEQGWI72uD@hydmax.dgmburn.mongodb.net/?retryWrites=true&w=majority');
    console.log('DB Connected');
  }
// Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(`${__dirname}/views`));

// Middlewares
app.use('/assets', express.static(path.join(`${__dirname}/views/assets`)));

app.use(bodyParser.json()); // for parsing application/json
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', engRoute);
// app.use('/send-mail', mailRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `App started on port ${port} at: `,
    new Date().toLocaleString(),
  );
});
