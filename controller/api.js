const Project = require("../model/Project")
const Contact = require("../model/Contact")
const Page = require("../model/Page")

exports.projects = async (req, res) => {
    const projects = await Project.find({})
    res.json({ message: projects })
}
exports.contact = async (req, res) => {
    const contact = await Contact.find({})
    res.send(contact)
}
exports.pages = async (req, res) => {
    const pages = await Page.find({})
    res.send(pages)
}
