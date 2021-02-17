;(async () => {
    require("dotenv").config()
    const bcrypt = require("bcrypt")
    const mongoose = require("mongoose")
    const User = require("../model/User")

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    const db = mongoose.connection
    db.on("error", console.error.bind(console, "connection error:"))
    const user = await User.find({ name: "test@test.com" })
    console.log(user)
    // const password = user.password
    // const passwordIn = "test"
    // const saltRounds = 10
    // bcrypt.compare(passwordIn, pwd, (err, result) => {
    //     console.log(result)
    // })
})()
