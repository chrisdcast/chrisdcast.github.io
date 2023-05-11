let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Here is some feature info');
});

module.exports = router;