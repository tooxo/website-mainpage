let express = require('express');
let router = express.Router();

let getFile = function (fileName) {
    return __dirname + "/" + fileName;
};

router.get('/', function (req, res) {
    res.sendFile(getFile("impressum.html"));
});
module.exports = router;
