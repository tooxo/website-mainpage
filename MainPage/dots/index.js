let express = require('express');
let router = express.Router();
let path = require('path');


let getFile = function (fileName) {
    return __dirname + "/" + fileName;
};

router.get('/', (req, res) => {
    let colorNames = ["indianred", "lightcoral", "salmon", "darksalmon", "lightsalmon", "crimson", "red", "firebrick", "darkred", "pink", "lightpink", "hotpink", "deeppink", "mediumvioletred", "palevioletred", "lightsalmon", "coral", "tomato", "orangered", "darkorange", "orange", "gold", "yellow", "lightyellow", "lemonchiffon", "lightgoldenrodyellow", "papayawhip", "moccasin", "peachpuff", "palegoldenrod", "khaki", "darkkhaki", "lavender", "thistle", "plum", "violet", "orchid", "fuchsia", "magenta", "mediumorchid", "mediumpurple", "amethyst", "blueviolet", "darkviolet", "darkorchid", "darkmagenta", "purple", "indigo", "slateblue", "darkslateblue", "mediumslateblue", "greenyellow", "chartreuse", "lawngreen", "lime", "limegreen", "palegreen", "lightgreen", "mediumspringgreen", "springgreen", "mediumseagreen", "seagreen", "forestgreen", "green", "darkgreen", "yellowgreen", "olivedrab", "olive", "darkolivegreen", "mediumaquamarine", "darkseagreen", "lightseagreen", "darkcyan", "teal", "aqua", "cyan", "lightcyan", "paleturquoise", "aquamarine", "turquoise", "mediumturquoise", "darkturquoise", "cadetblue", "steelblue", "lightsteelblue", "powderblue", "lightblue", "skyblue", "lightskyblue", "deepskyblue", "dodgerblue", "cornflowerblue", "mediumslateblue", "royalblue", "blue", "mediumblue", "darkblue", "navy", "midnightblue", "cornsilk", "blanchedalmond", "bisque", "navajowhite", "wheat", "burlywood", "tan", "rosybrown", "sandybrown", "goldenrod", "darkgoldenrod", "peru", "chocolate", "saddlebrown", "sienna", "brown", "maroon", "white", "snow", "honeydew", "mintcream", "azure", "aliceblue", "ghostwhite", "whitesmoke", "seashell", "beige", "oldlace", "floralwhite", "ivory", "antiquewhite", "linen", "lavenderblush", "mistyrose", "gainsboro", "lightgrey", "silver", "darkgray", "gray", "dimgray", "lightslategray", "slategray", "darkslategray", "black"];
    let color;
    try {
        color = req.query.color;
    } catch (e) {
        color = "#1b1b1b"
    }
    try {
        if (!colorNames.includes(color.toLowerCase())) {
            color = "#" + color;
        }
    } catch (e) {
        color = "#1b1b1b"
    }
    res.render('dots', {background_color: color});
});


router.use('/js', express.static(getFile('js')));

module.exports = router;
