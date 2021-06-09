const router = require('express').Router();
const database = require('../database');

router.get('/', (req,res) => {
    try {
        res.status(200).json({ msg: "aa" })
    } catch (error) {
        res.status(401).json({ error })
    }
})

module.exports = router;