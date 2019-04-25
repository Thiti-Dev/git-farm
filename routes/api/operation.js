const express = require('express');
const router = express.Router();

router.post('/fetch/repos', (req, res) => {
    res.json({success: "Success"})
})


module.exports = router