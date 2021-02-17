const express = require("express")
const adminController = require("../controller/admin")
const router = express.Router()

router.get("/", adminController.form)
router.post("/connect", adminController.login)
router.get("/dashboard", adminController.dashboard)
router.post("/project/:id", adminController.modifyProject)
router.get("/project/:id", adminController.deleteProject)
module.exports = router
