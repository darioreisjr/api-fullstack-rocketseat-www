import http from "node:http"

const server = http.createServer((request, response) => {
    const { url, method } = request

    if (method === "GET" && url === "/products") {
        return response.end("Lista de produtos!")
    }

    if (method === "POST" && url === "/products") {
        return response.writeHead(201).end("Produto cadastrado!")
    }

    return response.writeHead(400).end("Rota não encontrada!")
})

server.listen(9374)