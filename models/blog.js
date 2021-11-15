const mongoose = require('mongoose');
const Schema = mongoose.Schema; //define the structure about a document

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { //create timestamps at every blog document
    timestamps: true
});

//create model based on the schema
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;