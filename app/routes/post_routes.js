module.exports = (app) => {
    const posts = require('../controllers/post_controller')
    const router = require('express').Router()

    router.get('/', posts.findAll)

    app.use('/api/posts', router)
}