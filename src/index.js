require("dotenv").config()
const path = require("path")
const express = require("express")
const session = require("express-session")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const helmet = require("helmet")
const handleb = require("handlebars")
const handlebars = require("express-handlebars")
const mongoose = require("mongoose")
const adminRoutes = require("../routes/admin")
const indexRoutes = require("../routes/index")
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
app.use(
  session({
    secret: process.env.SECRET_TOKEN,
    resave: true,
    saveUninitialized: true,
  })
)
app.use("/", indexRoutes)
app.use("/admin", adminRoutes)

app.get("*", (req, res) =>
{
  res.render("404")
})


app.listen(port, () => console.log(`App listening on http://localhost:${port}`))
