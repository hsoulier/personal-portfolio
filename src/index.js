require("dotenv").config()
const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const helmet = require("helmet")
const handleb = require("handlebars")
const handlebars = require("express-handlebars")
const mongoose = require("mongoose")
const project = require("../controller/project")
const user = require("../controller/user")
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access")

const app = express()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))

app.set("view engine", "hbs")
app.engine(
  "hbs",
  handlebars({
    layoutsDir: path.resolve("views/layout"),
    extname: "hbs",
    defaultLayout: "default",
    partialsDir: path.resolve("views/partial"),
    handlebars: allowInsecurePrototypeAccess(handleb),
  })
)
app.use(express.static("public"))
app.use(helmet())
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.render("home")
})

app.post("/contact", (req, res) => {
  const contactMessage = JSON.parse(JSON.stringify(req.body))
  console.log(contactMessage)
  res.render("home", { messageSended: true })
})

app.get("/projets", async (req, res) => {
  const projects = await project.getAll()
  res.render("projects", { projects })
})

app.get("/admin", (req, res) => {
  res.render("login-admin")
})

app.post("/connect-admin", async (req, res) => {
  console.log(req.body)
  const admin = await user.findUser(req.body)
  console.log(admin)
  res.render("admin", { admin })
})

app.listen(port, () => console.log(`App listening on http://localhost:${port}`))
