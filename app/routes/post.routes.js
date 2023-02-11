module.exports = (app) => {
    const post = require('../controllers/post.controller') //memanggil controller post
    const router = require('express').Router()

    //GET
    router.get('/', post.findAll)
    
    app.use('/api/posts', router);
}