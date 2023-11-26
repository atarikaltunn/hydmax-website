const express = require('express');
const ejs = require('ejs');
const path = require('path');

const engRoute = require('./routes/engRoutes');

const app = express();

// Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

// Middlewares
app.use(express.static(path.join(__dirname + '/views/assets')));

// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes
app.use('/', engRoute);
// app.use('/send-mail', mailRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(
        `App started on port ${port} at: `,
        new Date().toLocaleString()
    );
});