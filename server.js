const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
const path = require('path');
const request = require('request');

app.set('view engine', 'vash');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.get('/reddit', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/subr-dl.html'));
});

app.get('/reddit/explanation', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/subr-dl-explanation.html'));
});

app.get('/impressum', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/impressum.html'));
});

app.get('/travel/update', (req, res) => {
    if (req.header('User-Agent') === "TravelAssistant") {
        if (req.header('Version-Code')) {
            request("https://gist.githubusercontent.com/tooxo/09638045a27f75d30149bf9058dc6c03/raw/48871768476ccf6fac0a1505111e575a7910c7e1/TravelAssistantData.json", {"User-Agent": "tooxo"}, function (error, response, body) {
                let jsonObj = JSON.parse(body);
                let version = jsonObj.version;
                if (req.header('Version-Code') < version) {
                    res.status(200);
                    res.send(body);
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
    let colorNames = ["indianred", "lightcoral", "salmon", "darksalmon", "lightsalmon", "crimson", "red", "firebrick", "darkred", "pink", "lightpink", "hotpink", "deeppink", "mediumvioletred", "palevioletred", "lightsalmon", "coral", "tomato", "orangered", "darkorange", "orange", "gold", "yellow", "lightyellow", "lemonchiffon", "lightgoldenrodyellow", "papayawhip", "moccasin", "peachpuff", "palegoldenrod", "khaki", "darkkhaki", "lavender", "thistle", "plum", "violet", "orchid", "fuchsia", "magenta", "mediumorchid", "mediumpurple", "amethyst", "blueviolet", "darkviolet", "darkorchid", "darkmagenta", "purple", "indigo", "slateblue", "darkslateblue", "mediumslateblue", "greenyellow", "chartreuse", "lawngreen", "lime", "limegreen", "palegreen", "lightgreen", "mediumspringgreen", "springgreen", "mediumseagreen", "seagreen", "forestgreen", "green", "darkgreen", "yellowgreen", "olivedrab", "olive", "darkolivegreen", "mediumaquamarine", "darkseagreen", "lightseagreen", "darkcyan", "teal", "aqua", "cyan", "lightcyan", "paleturquoise", "aquamarine", "turquoise", "mediumturquoise", "darkturquoise", "cadetblue", "steelblue", "lightsteelblue", "powderblue", "lightblue", "skyblue", "lightskyblue", "deepskyblue", "dodgerblue", "cornflowerblue", "mediumslateblue", "royalblue", "blue", "mediumblue", "darkblue", "navy", "midnightblue", "cornsilk", "blanchedalmond", "bisque", "navajowhite", "wheat", "burlywood", "tan", "rosybrown", "sandybrown", "goldenrod", "darkgoldenrod", "peru", "chocolate", "saddlebrown", "sienna", "brown", "maroon", "white", "snow", "honeydew", "mintcream", "azure", "aliceblue", "ghostwhite", "whitesmoke", "seashell", "beige", "oldlace", "floralwhite", "ivory", "antiquewhite", "linen", "lavenderblush", "mistyrose", "gainsboro", "lightgrey", "silver", "darkgray", "gray", "dimgray", "lightslategray", "slategray", "darkslategray", "black"];
    let color;
    try {
        color = req.query.color;
    } catch (e) {
        color = "#1b1b1b"
    }
    if (!colorNames.includes(color.toLowerCase())) {
        color = "#" + color;
    }
    res.render('dots', {background_color: color});
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

app.use((req, res, next) => {
    res.status(404).render('error', {error: '404 – NOT FOUND!'})
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        error: '500 – INTERNAL SERVER ERROR!'
    });
});

app.listen(PORT, HOST);
