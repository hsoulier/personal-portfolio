const multer = require("multer")

const MIME_TYPES = {
	"image/jpg": "jpg",
	"image/jpeg": "jpg",
	"image/png": "png",
}
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/img/project")
	},
	filename: (req, file, cb) => {
		const { originalname, mimetype } = file
		const extension = MIME_TYPES[mimetype]
		cb(
			null,
			`${originalname.split(".")[0]}-${Math.random()
				.toString(12)
				.substr(2, 7)}.${extension}`
		)
	},
})

module.exports = multer({ storage }).single("image")
