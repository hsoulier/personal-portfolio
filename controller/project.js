const Project = require("../model/Project")

exports.getAll = async (req, res) => {
    const projects = await Project.find({})
    projects.forEach((project) => {
        project.speed = Math.random() * 8
    })
    res.render("projects", { projects })
}
