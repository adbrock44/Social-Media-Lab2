const posts = [
    {
      id: 1,
      title: "My First Post",
      body: "This is the body of my first post.",
      author: "John Doe",
      createdAt: "2023-04-17T12:00:00Z",
      updatedAt: "2023-04-17T12:00:00Z"
    },
    {
      id: 2,
      title: "My Second Post",
      body: "This is the body of my second post.",
      author: "Jane Smith",
      createdAt: "2023-04-17T13:00:00Z",
      updatedAt: "2023-04-17T13:00:00Z"
    },
    {
      id: 3,
      title: "My Third Post",
      body: "This is the body of my third post.",
      author: "Mike Johnson",
      createdAt: "2023-04-17T14:00:00Z",
      updatedAt: "2023-04-17T14:00:00Z"
    }
  ];
  exports.getAllPosts = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(posts);
}



  exports.createPost = (req, res) => {
    const newPost = {
      id: posts.length + 1,
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    posts.push(newPost);
    res.status(201).json(newPost);
  };
  
  