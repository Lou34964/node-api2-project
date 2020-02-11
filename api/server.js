const express = require(express);


const postsRouter = require("../posts/post-router.js");

const server = express();

server.use(express.json());


server.get('/', (req,res)=>{
  res.send(`<h1>Hello World!</h2>`);
});

server.use('/api/posts', postsRouter);

module.exports = server;