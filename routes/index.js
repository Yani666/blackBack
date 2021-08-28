const express = require('express');
const router = express.Router();

const uploadCloud = require('../config/cloudinary');
const {upload} = require ('../controllers/uploadController');

router.post('/upload', uploadCloud.single('img'), upload)

module.exports = router;
