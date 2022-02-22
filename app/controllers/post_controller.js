const db = require('../models/')
const Post = db.posts

exports.findAll = (req, res) => {
    Post.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "something went wrong"
            })
        });
}

exports.create = (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        published: req.body.published ? req.body.published : false,
    })

    post.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "something went wrong when creating post"
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Post.findById(id)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "some error while show post"
            })
        })
}