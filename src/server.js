import http from "node:http"

const server = http.createServer((request, response) => {
    const {method} = request

    return response.writeHead(201).end("Criado com sucesso!")
})

server.listen(9374)