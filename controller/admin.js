const Project = require("../model/User")
const bcrypt = require("bcrypt")

exports.login = async (req, res) => {
  const { email, password } = req.body
  const user = await Project.findOne({ email })
  const userPassword = user.password
  const match = await bcrypt.compare(password, userPassword)
  req.session.login = match
  match ? res.redirect("/admin/dashboard") : res.render("login-admin", { error: !match })
}
exports.form = (req, res) =>
{
  if (req.session.login) {
    res.redirect("/admin/dashboard")
  }
  res.render("login-admin")
}

exports.dashboard = (req, res) => {
  const logged = req.session.login
  if (logged === undefined) {
    res.redirect("/admin")
  }
  res.render("dashboard")
}
