module.exports = (mongoose) => {
    const schema = new mongoose.Schema(
        {
            title: {type: String},
            body: {type: String},
            published: {type: Boolean}
        }, 
        { timestamps: true }
    )
    
    schema.method("toJSON", function() { //convert field _id menjadi object id
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Post = mongoose.model("posts", schema)
    return Post
}