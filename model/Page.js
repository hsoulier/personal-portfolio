const mongoose = require("mongoose")
const { Schema, model } = mongoose

const pageSchema = new Schema({
  page: {
    type: String,
    required: true,
  },
  section: Object,
})

module.exports = model("page", pageSchema)
