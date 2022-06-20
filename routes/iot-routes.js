const express = require('express');
const iotRouter = express.Router();
const {uploadFile} = require('../controllers/iot-controller');

iotRouter.post('/upload', uploadFile);

module.exports = iotRouter;