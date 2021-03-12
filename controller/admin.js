const User = require("../model/User")
const Project = require("../model/Project")
const Contact = require("../model/Contact")
const Page = require("../model/Page")
const bcrypt = require("bcrypt")
const { json } = require("body-parser")

exports.login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    const userPassword = user.password
    let username = user.email.substring(0, user.email.indexOf("@"))
    // let result = false
    // bcrypt.compare(password, userPassword, (err, result) => {
    //     result = true
    // })
    // const match = await bcrypt.compare(password, userPassword)
    // req.session.login = match ? username : null
    // match
    //     ? res.redirect("/admin/dashboard")
    //     : res.render("login-admin", { error: !match })

    res.render("login-admin", { error: !match })
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
    console.log("Result: ", req.body)
    const project = new Project(req.body)
    project.save(function (err) {
        if (err) {
            console.error(err)
            return
        }
        console.log("Project inserted")
    })
    res.redirect("/admin/dashboard")
}
