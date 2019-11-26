let express = require('express');
let router = express.Router();

let getFile = function (fileName) {
    return __dirname + "/" + fileName;
};

router.get('/', function (req, res) {
    res.sendFile(getFile("index.html"));
});

router.get('/explanation', function (req, res) {
    res.sendFile(getFile('explanation.html'));
});

router.use('/js', express.static(getFile('js')));
router.use('/css', express.static(getFile('css')));
router.use('/image', express.static(getFile('image')));

module.exports = router;
