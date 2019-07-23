const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.get('/reddit', (req, res) => {
  res.sendFile(path.join(__dirname + '/static/subr-dl.html'));
});

app.get('/reddit/explanation', (req, res) => {
  res.sendFile(path.join(__dirname + '/static/subr-dl-explanation.html'));
});

/*

  stylesheets

*/

app.get('/stylesheets/main.css', (req, res) => {
  res.sendFile(path.join(__dirname + "/stylesheets/main.css"));
});

app.get('/stylesheets/title.css', (req, res) => {
  res.sendFile(path.join(__dirname + "/stylesheets/title.css"));
});

app.get('/stylesheets/slideshow.css', (req, res) => {
  res.sendFile(path.join(__dirname + "/stylesheets/slideshow.css"));
});

/*

  images

*/

app.get('/image/arrow.png', (req, res) => {
  res.sendFile(path.join(__dirname + "/image/arrow.png"));
});

app.get('/image/files.png', (req, res) => {
  res.sendFile(path.join(__dirname + "/image/files.png"));
});

app.get('/image/Mountains.jpg', (req, res) => {
  res.sendFile(path.join(__dirname + "/image/Mountains.jpg"));
});

app.get('/image/Mountainslowres.jpg', (req, res) => {
  res.sendFile(path.join(__dirname + "/image/Mountainslowres.jpg"));
});

app.get('/image/spotify.png', (req, res) => {
  res.sendFile(path.join(__dirname + "/image/spotify.png"));
});

app.get('/image/discordbot.png', (req, res) => {
  res.sendFile(path.join(__dirname + "/image/discordbot.png"));
});

app.get('/image/lights.gif', (req, res) => {
  res.sendFile(path.join(__dirname + "/image/lights.gif"));
});

app.get('/image/discord.gif', (req, res) => {
  res.sendFile(path.join(__dirname + "/image/discord.gif"));
});

app.get('/image/more.gif', (req, res) => {
  res.sendFile(path.join(__dirname + "/image/more.gif"));
});

app.get('/image/spotifyrandom.gif', (req, res) => {
  res.sendFile(path.join(__dirname + "/image/spotifyrandom.gif"));
});

app.get('/image/reddit.gif', (req, res) => {
  res.sendFile(path.join(__dirname + "/image/reddit.gif"));
});

/*

  scripts

*/

app.get('/script/main.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/script/main.js"));
});

app.get('/script/resize.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/script/resize.js"));
});

app.get('/script/tracker.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/script/tracker.js"));
});

app.get('/script/slideshow.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/script/slideshow.js"));
});

app.get('/script/FileSaver.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/script/FileSaver.js"));
});

app.get('/script/jszip.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/script/jszip.js"));
});

/*

  dots

*/

app.get('/dots', (req, res) => {
  res.sendFile(path.join(__dirname + "/static/dots.html"));
});

app.get('/dots/dots.js', (req, res) => {
  res.sendFile(path.join(__dirname + "/script/dots.js"));
});

/*

    static

*/

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname + "/favicon.ico"));
});

app.use('/files', express.static(path.join(__dirname, '/static/files')));

app.listen(PORT, HOST);