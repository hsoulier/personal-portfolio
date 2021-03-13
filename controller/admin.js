const User = require("../model/User")
const Project = require("../model/Project")
const Contact = require("../model/Contact")
const Page = require("../model/Page")
const bcrypt = require("bcrypt")
const { json } = require("body-parser")

exports.login = async (req, res) => {
	const { email, password } = req.body
	const user = await User.findOne({ email })
	let username = user.email.substring(0, user.email.indexOf("@"))
	bcrypt.compare(password, user.password, (err, result) => {
		console.log(result)
		req.session.login = result ? username : undefined
		return result
			? res.redirect("/admin/dashboard")
			: res.render("login-admin", { error: !result })
	})
}
exports.form = (req, res) => {
	if (req.session.login) {
		res.redirect("/admin/dashboard")
	}
	res.render("login-admin")
}
exports.dashboard = async (req, res, next) => {
	const { login } = req.session
	if (!login) {
		res.redirect("/admin")
		next()
	}
	const projects = await Project.find({})
	const contacts = await Contact.find({})
	res.render("dashboard", { layout: "admin", login, projects, contacts })
}
exports.deleteProject = async (req, res) => {
	const id = req.params.id
	console.log("Delete this project:", id)
	Project.deleteOne({ _id: id }, (err) => {
		if (err) console.log(err)
		console.log("Successful deletion")
	})
	res.redirect("/admin/dashboard")
}
exports.modifyProject = async (req, res) => {
	res.redirect("/admin/dashboard")
}
exports.insertProject = (req, res) => {
	const { title, description, subtitle, stack, link } = req.body
	const { filename } = req.file
	console.log({ body: req.body, File: req.file })

	const project = new Project({
		title,
		description,
		subtitle,
		stack,
		link,
		image: filename,
	})
	project.save(function (err) {
		if (err) {
			console.error(err)
			return
		}
		console.log("Project inserted")
	})
	res.redirect("/admin/dashboard")
}

exports.auth = (req, res, next) => {
	if (req.session.login) {
		next()
	} else {
		return res.redirect("/admin")
	}
}
