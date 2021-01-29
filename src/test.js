;(async () => {
  const bcrypt = require("bcrypt")
  const password = "test"
  const saltRounds = 10
  const otherPass = "not_bacon"

  bcrypt.hash(password, saltRounds, function (err, hash) {
    console.log(hash);
    bcrypt.compare("test", hash, function (err, result) {
      console.log(result);
    })
  })
})()
