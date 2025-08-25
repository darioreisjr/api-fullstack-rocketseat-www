import { parseRoutePath } from './utils/parseRoutePath.js'

export const routes = [
    {
        method: "GET",
        path: "/products",
        controller: (request, response) => {
            return response.end("Lista de produtos!")
        }
    },
    {
        method: "POST",
        path: "/products",
        controller: (request, response) => {
            console.log(request.body)
            return response.writeHead(201).end(JSON.stringify(request.body))
        }
    },
    {
        method: "DELETE",
        path: "/products/:id",
        controller: (request, response) => {
            return response.end("Deletando produto com id: " + request.params.id)
        }
    },

].map((route) => {
    return {
        ...route,
        path: new RegExp(parseRoutePath(route.path))
    }
})