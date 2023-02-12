module.exports = (app) => {
    const post = require('../controllers/post.controller') //memanggil controller post
    const router = require('express').Router()

    //GET
    router.get('/', post.findAll)
    //GET ONE
    router.get('/:id', post.findOne)
    // POST
    router.post('/', post.create)
    // PUT
    router.put('/:id', post.update)
    // DELETE
    router.delete('/:id', post.delete)
    
    app.use('/api/posts', router);
}