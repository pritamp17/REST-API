const express = require('express');

const router = express.Router();
const Post = require('../models/Post');

/// gets back all the posts 
router.get('/',async(req,res) =>{
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({message:error});
    }
});
//// submits the post
router.post('/', async(req, res ) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save()
        res.json(savedPost);
       
    } catch (error) {
        res.json({message:error});
    }

///// specific post
router.get('/:postId', async(req,res) => {
    
    try {
        const post = await Post.findById(req.params.postId)
    res.json(post)
    } catch (error) {
        res.json({message:error});
    }
})
    
    
});
////delete
router.delete('/:postId', async(req, res) => {
    
    try {
        res.json(await Post.remove({_id: req.params.postId }))
    } catch (error) {
        res.json({message:error});
    }
});

/// update post
router.patch('/:postId', async(req, res) => {
    
    try {
        res.json(await Post.updateOne({_id: req.params.postId },
            {$set: {title:req.body.title}}
            ))
    } catch (error) {
        res.json({message:error});
    }
});

module.exports = router;