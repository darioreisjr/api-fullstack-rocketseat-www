import http from "node:http"
import { jsonBodyHandler } from "./miidlewares/jsonBodyHandler.js"
import { routeHandler } from "./miidlewares/routeHandler.js"

const server = http.createServer(async (request, response) => {
    await jsonBodyHandler(request, response)
    routeHandler(request, response)
})

server.listen(9374)