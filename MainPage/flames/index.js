let express = require('express');
let router = express.Router();

let getFile = function (fileName) {
    return __dirname + "/" + fileName;
};

router.get('/', function (req, res) {
    res.sendFile(getFile("flames.html"));
});

router.use('/js', express.static(getFile('js')));
router.use('/css', express.static(getFile('css')));

module.exports = router;
