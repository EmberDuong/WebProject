var express = require('express');
var router = express.Router();
var fs = require('fs-extra');
// Get Product model
var Product = require('../models/product');
// Get Product model
var Category = require('../models/category');
var Comment = require('../models/comment');


router.post('/:category/:slug', function (req, res) {
    const content = req.body.content;
    const slug = req.params.slug;
    const name = req.body.name;
    Product.findOne({
        slug: slug
    }, function (err, product) {
        if (err)
            console.log(err);
        else {
            var comment = new Comment({
                // idProduct: product._id,
                slug: slug,
                content: content,
                name: name
            });
            comment.save(function (err) {
                if (err) {
                    console.log(err);
                }
            })
            Comment.find({
                slug: slug
            }, function (err, comments) {
                if (err)
                    console.log(err);
                else {
                    res.redirect('/products/'+slug);
                }
            })
        }
    })

});

module.exports = router;