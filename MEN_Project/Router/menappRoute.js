const express = require('express');
const router = express.Router();
console.log("hello");
router.get('/', (req, res) => {
    res.send('GEt Request');
});

module.exports = router;