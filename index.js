const server = require('./api/server');

const port = 5000;

server.listen(port, ()=>{
  console.log(`\n\n Server running on http://Lou34964.com:${port} \n\n`);
})