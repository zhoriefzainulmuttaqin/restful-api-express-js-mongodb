const db = require('../models')
const Post = db.posts

exports.findAll = (req, res) => {
    Post.find() //library mongoose untuk get all data
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error while retrieving posts."
        })
    });
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Post.findById(id)
    .then((result) => { //promise
        if(!result) { //jika tidak ada
            res.status(404).send({
                message: "Post not found"
            })
        }
            
        res.send(result)

    }).catch((err) => {
       res.status(500).send({
            message: err.message || "Some error while show post."
        })
    });
}

exports.create = (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        published: req.body.published ? req.body.published : false
    })

    post.save(post)
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while create posts."
        })
    });
}

exports.update = (req, res) => {
    const id = req.params.id

    Post.findOneAndUpdate(id, req.body)
    .then((result) => {
        if(!result) { //jika tidak ada
            res.status(404).send({
                message: "Post not found"
            })
        }
            
            res.send({
                message: "Post was updated"
            })
    }).catch((err) => {
        res.status(500).send({
                message: err.message || "Some error while update post."
            })
    });
}

exports.delete = (req, res) => {
    const id = req.params.id

    Post.findOneAndRemove(id)
    .then((result) => {
        if(!result) {
            res.status(404).send({
                message: "Post not found"
            })
        }

        res.send({
            message: "Post was deleted"
        })
    }).catch((err) => {
         res.status(500).send({
                message: err.message || "Some error while update post."
            })
    });
}