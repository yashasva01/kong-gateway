const express = require('express')
const router = express.Router();
const controller = require('../controllers/controllers.js')


router.get("/function1", controller.feature1)

router.get("/function2", controller.feature2)

module.exports = router;