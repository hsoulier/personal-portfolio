const mongoose = require("mongoose")
const { Schema, model } = mongoose


const requiredString = {
    type: String,
    required: true
  } 
const userSchema = new Schema({
  email: requiredString,
  password: requiredString,
})

module.exports = model("user", userSchema)