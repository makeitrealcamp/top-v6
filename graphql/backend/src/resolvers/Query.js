const users = require('./data')

module.exports = {
  users() {
    return users
  },
  user(id) {
    console.log(id)
    const user = users.filter(user => user.id == 1)[0]
    console.log(user)
    return user
  }
}
