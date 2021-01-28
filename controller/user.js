const Project = require("../model/User")
const bcrypt = require("bcrypt")

exports.findUser = ({ email, password }) => {
  const user = Project.findOne({ email })
  const hash = bcrypt.hashSync(password, 10)
  bcrypt.compare(password, user.password).then(function (result) {
    console.log({ result })
  })
  return null
}
