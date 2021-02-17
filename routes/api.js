const express = require("express")
const apiController = require("../controller/api")
const router = express.Router()

router.get("/projects", apiController.projects)
router.get("/contact", apiController.contact)
router.get("/pages", apiController.pages)
module.exports = router
