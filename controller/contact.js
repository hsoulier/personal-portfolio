const Contact = require("../model/Contact")
const Page = require("../model/Page")

exports.send = async (req, res) => {
    const contactMessage = JSON.parse(JSON.stringify(req.body))
    await Contact.insertMany([contactMessage], (err) => {
        console.log(err)
    })
    const data = await Page.findOne({ page: "home" })
    const { sections } = data
    res.render("home", { messageSended: true, sections, script: "home" })
}
