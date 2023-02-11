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