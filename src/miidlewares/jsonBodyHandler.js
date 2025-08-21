export async function jsonBodyHandler(request, response) {
    // Adicionar cada chunk
    const buffers = []

    // Coleta os chucks de dados da requisição
    for await (const chunk of request) {
        buffers.push(chunk)
    }

    try {
        // Concatena os chunk e converter para strings. Em seguida, converte a string para JSON.
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        request.body = null
    }

    // Define o header de responta com Json
    response.setHeader("Content-Type", "application/json")
}