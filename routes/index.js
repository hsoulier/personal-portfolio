const express = require("express")
const router = express.Router()
const projectController = require("../controller/project")
const pageController = require("../controller/page")
const contactController = require("../controller/contact")

router.get("/", pageController.home)

router.post("/contact", contactController.send)
router.get("/projets", projectController.getAll)

module.exports = router
