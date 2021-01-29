const Project = require("../model/Page")

exports.home = async (req, res) => {
  const data = await Project.findOne({ page: "home" })
  const { sections } = data
  res.render("home", { sections, script: "home" })
}
