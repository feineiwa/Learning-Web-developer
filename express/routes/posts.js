import express from 'express';
const router = express.Router();

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post two'},
    {id: 3, title: 'Post Three'},
];

// get all posts
// app.get('/api/posts', (req, res) => {
//     res.json(posts);
// });

// res.sendFile(Path.join(__dirname, 'public', 'index.html'));

router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);

});

//get single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    
    if (!post) {
        const error = new  Error(`A Post with the id ${id} was not found`);
        return next(error)
    }
    res.status(200).json(post);
    // res.status(200).json(posts.filter((post) => post.id === id));
});

//create new post
router.post('/', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };

    if (!newPost.title) {
        return res.status(400).json({ message: 'Please include a title' });
    }
    posts.push(newPost);

    res.status(201).json(posts);
});

//Update a post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ message: `A Post with the id ${id} was not found` });
    }

    post.title = req.body.title;
    res.status(200).json(posts);
});

//Delete a post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ message: `A Post with the id ${id} was not found` });
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
});
export default router;