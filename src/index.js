require("dotenv").config()
const path = require("path")
const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const handleb = require("handlebars")
const handlebars = require("express-handlebars")
const mongoose = require("mongoose")
const project = require("../controller/project")
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
    defaultLayout: "main",
    partialsDir: path.resolve("views/partial"),
    handlebars: allowInsecurePrototypeAccess(handleb),
  })
)
app.use(express.static("public"))
app.use(helmet())
app.use(morgan("tiny"))

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/projets", async (req, res) => {
  const projects = await project.getAll()
  res.render("projects", { projects })
})

app.listen(port, () => console.log(`App listening on http://localhost:${port}`))
