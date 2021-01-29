const Project = require("../model/Page")

exports.home = async (req, res) => {
  const data = await Project.findOne({ page: "home" })
  console.log(Object.keys(data))
  const { sections } = data
  console.log(data.sections)
  res.render("home", { sections })
}
