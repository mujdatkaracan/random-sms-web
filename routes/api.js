const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.get('/get-all', (req, res, next) => {
    Category.find({})
        .then(data => res.json(data))
        .catch(next);
});
module.exports = router;