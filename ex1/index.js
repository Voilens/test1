const http = require('http')
const PORT = 8080;

const server = http.createServer((req, res) => {
    res.end("hello")
})

server.listen(PORT, () => {
    console.log('серв запущен: http://localhost:%s', PORT)
})