const mongoose = require("mongoose")
const { Schema, model } = mongoose

const pageSchema = new Schema({
  page: {
    type: String,
    required: true,
  },
  sections: Object,
})

module.exports = model("page", pageSchema)
