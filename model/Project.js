const mongoose = require("mongoose")
const { Schema, model } = mongoose


const requiredString = {
    type: String,
    required: true
  } 
const projectSchema = new Schema({
  title: requiredString,
  subtitle: requiredString,
  description: requiredString,
  stack: requiredString,
  image: requiredString,
  link: String,
  date: Date
})

module.exports = model("project", projectSchema)