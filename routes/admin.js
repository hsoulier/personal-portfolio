const express = require("express")
const adminController = require("../controller/admin")
const router = express.Router()

router.get("/", adminController.form)
router.get("/dashboard", adminController.dashboard)
router.get("/project/:id", adminController.deleteProject)
router.post("/connect", adminController.login)
router.post("/project/new", adminController.insertProject)
router.post("/project/:id", adminController.modifyProject)
module.exports = router
