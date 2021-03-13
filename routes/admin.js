const express = require("express")
const adminController = require("../controller/admin")
const multer = require("../controller/multer")
const router = express.Router()

router.get("/", adminController.form)
router.get("/dashboard", adminController.auth, adminController.dashboard)
router.get("/project/:id", adminController.auth, adminController.deleteProject)
router.post("/connect", adminController.login)
router.post("/project/new", adminController.auth, multer, adminController.insertProject)
router.post("/project/:id", adminController.auth, adminController.modifyProject)
module.exports = router
