// Import http modules
const http = require("http")

// create server with HTTP
const server = http.createServer((req, res)=> {
    console.log("server is created")
})

// initial port
const PORT = 4400;

// listen to server
server.listen(PORT, ()=> console.log('Server is running on port ${PORT}'))