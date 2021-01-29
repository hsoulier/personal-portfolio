const Project = require("../model/Page")

exports.home = async (req, res) => {
  const data = await Project.findOne({ page: "home" })
  const { sections } = data
  console.log(sections)
  res.render("home", { sections })
}
