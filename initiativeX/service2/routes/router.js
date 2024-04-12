const express = require('express')
const router = express.Router();
const controller = require('../controller/controllers.js')


router.get("/function1", controller.feature1)

router.get("/function2", controller.feature2)

module.exports = router;