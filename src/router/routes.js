// requirments
const express = require('express')
const router = express.Router()

// ---------------------------{ ROUTING }-----------------------------------

router.get('/', (req, res) => {
    res.send('hello world')
})

module.exports = router