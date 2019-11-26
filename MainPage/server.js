const PORT = 8080;
const HOST = '0.0.0.0';

const express = require("express");
const app = express();
const path = require('path');
const request = require('request');


app.set('view engine', 'pug');
app.set('views', [__dirname + '/views', __dirname + "/dots/views"]);
app.enable('strict routing');

app.use((req, res, next) => {
    if (req.url.split('/')[req.url.split('/').length - 1]) {
        if (req.url.split('/')[req.url.split('/').length - 1].includes('.') || req.url.split('/')[req.url.split('/').length - 1].includes('?')) {
            next()
        } else {
            res.redirect(301, req.originalUrl + "/")
        }
    } else {
        next()
    }
});

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});
*/

// Import for Index page
let indexRoutes = require('./index/index.js');
app.use('/', indexRoutes);

// Reddit
let redditRoutes = require('./reddit/index.js');
app.use('/reddit/', redditRoutes);

let dotsRoute = require('./dots/index.js');
app.use('/dots', dotsRoute);

app.use('/flames', require('./flames/index.js'));

app.use('/ragecaptcha', require('./rageCaptcha/index.js'));

app.use('/impressum', require('./impressum/impressum.js'));

app.get('/travel/update', (req, res) => {
    if (req.header('User-Agent') === "TravelAssistant") {
        if (req.header('Version-Code')) {
            request("https://gist.githubusercontent.com/tooxo/09638045a27f75d30149bf9058dc6c03/raw/48871768476ccf6fac0a1505111e575a7910c7e1/TravelAssistantData.json", {"User-Agent": "tooxo"}, function (error, response, body) {
                let jsonObj = JSON.parse(body);
                let version = jsonObj.version;
                if (req.header('Version-Code') < version) {
                    res.status(200);
                    res.send(JSON.stringify(jsonObj));
                } else {
                    res.status(200);
                    res.send("NO UPDATE AVAILABLE.");
                }
            })
        } else {
            res.status(403);
            res.render('error', {error: "403 – FORBIDDEN!"});
        }
    } else {
        res.status(403);
        res.render('error', {error: "403 – FORBIDDEN!"});
    }
});

/*

    static

*/

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname + "/favicon.ico"));
});

app.use('/files', express.static(path.join(__dirname, '/static/files')));


app.use((req, res, next) => {
    res.status(404).render('error', {error: '404 – NOT FOUND!'})
});

app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.render('error', {
        error: '500 – INTERNAL SERVER ERROR!'
    });
});

app.listen(PORT, HOST);
