var mongoose = require('mongoose')
// page schema

var CommentSchema = mongoose.Schema({
    // idProduct:{
    //     type: String,
    //     require:true
    // },
    name:{
        type: String,
        require:true
    },

    slug:{
        type: String,
    },

    content:{
        type: String,
        require:true
    }
});

var Comment = module.exports = mongoose.model('Comment',CommentSchema);