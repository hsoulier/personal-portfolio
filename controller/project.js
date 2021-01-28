const Project = require("../model/Project")

exports.getAll = () => {
  const projects = Project.find({})
  return projects
}
