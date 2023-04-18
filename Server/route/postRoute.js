console.log("[postRoute] initialized");

var express = require('express');
var router = express.Router();

// Get all posts
router.get('/', (req, res) => {
  // To do: Add logic to retrieve all posts from database
  res.send('TODO: Retrieve all posts');
});

// Get post by ID
router.get('/:id', (req, res) => {
  // To do: Add logic to retrieve post by ID from database
  res.send(`TODO: Retrieve post with ID ${req.params.id}`);
});

// Create new post
router.post('/', (req, res) => {
  // To do: Add logic to create new post and store in database
  res.send(`TODO: Create new post with title "${req.body.title}" and body "${req.body.body}"`);
});

// Update existing post
router.put('/:id', (req, res) => {
  // todo: Add logic to update existing post by ID in database
  res.send(`TODO: Update post with ID ${req.params.id} with new title "${req.body.title}" and body "${req.body.body}"`);
});

// Delete post by ID
router.delete('/:id', (req, res) => {
  // To do: Add logic to delete post by ID from database
  res.send(`TODO: Delete post with ID ${req.params.id}`);
});

module.exports = router;
