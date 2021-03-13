const Project = require("../model/Project")

exports.getAll = async (req, res) => {
	const projects = await Project.find({})
	res.render("projects", { projects })
}
