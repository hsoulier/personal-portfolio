const express = require("express")
const router = express.Router()
const projectController = require("../controller/project")
const pageController = require("../controller/page")

router.get("/", pageController.home)

router.post("/contact", (req, res) => {
  const contactMessage = JSON.parse(JSON.stringify(req.body))
  console.log(contactMessage)
  res.render("home", { messageSended: true })
})
router.get("/projets", projectController.getAll)

module.exports = router
