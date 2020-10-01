const { User } = require('./models');

module.exports = {
  async list(req, res) {
    const users = await User.findAll()
    res.status(200).json(users)
  },
  async create(req, res) {
    const user = await User.create(req.body)
    res.status(200).json(user)
  },
  async show(req, res) {
    const { id } = req.params
    const user = await User.scope({ include: [Recipe] }).findByPk(id)
    res.status(200).json(user)
  },
  async update(req, res) {
    const { id } = req.params
    let user = await User.findByPk(id)
    user = await user.update(req.body)
    res.status(200).json(user)
  },
  async delete(req, res) {
    const { id } = req.params
    const user = await User.findByPk(id)
    await user.destroy()
    res.status(200).json(user)
  }
}

