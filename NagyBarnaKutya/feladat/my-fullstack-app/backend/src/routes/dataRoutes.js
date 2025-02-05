const express = require('express');
const DataController = require('../controllers/dataController');

const router = express.Router();
const dataController = new DataController();

router.post('/data', dataController.postData);
router.get('/data', dataController.getData);

module.exports = router;