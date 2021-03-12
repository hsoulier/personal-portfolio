const Project = require("../model/Project")

exports.getAll = async (req, res) => {
	const projects = await Project.find({})
	projects.forEach((project, index) => {
		const speed = Math.random() - 0.5
		project.speed = 3 + speed
		const delay = Math.abs(Math.random() - 0.5) / 10
		project.delay = delay
		console.log(project.speed, delay)
	})
	res.render("projects", { projects })
}
