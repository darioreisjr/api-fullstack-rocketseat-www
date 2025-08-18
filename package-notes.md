{
  // "name" → Nome do projeto/pacote.
  // Deve ser único se for publicado no npm. Geralmente em letras minúsculas e sem espaços.
  "name": "api",

  // "version" → Versão do projeto seguindo o padrão semântico (semver).
  // Exemplo: "1.0.0" significa versão inicial estável.
  "version": "1.0.0",

  // "description" → Breve descrição do que o projeto faz.
  // Isso ajuda outros desenvolvedores (ou até você mesmo no futuro) a entender rapidamente o propósito.
  "description": "Criando api em node.js",

  // "main" → Arquivo principal do projeto.
  // Quando alguém importar seu pacote, esse será o ponto de entrada (aqui é "index.js").
  "main": "index.js",

  // "scripts" → Conjunto de comandos que você pode executar com "npm run <script>".
  // Neste caso, só há o "test", que por padrão exibe uma mensagem de erro (ainda não foi configurado).
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  // "keywords" → Palavras-chave relacionadas ao projeto.
  // São úteis se você publicar no npm, pois ajudam outros a encontrar seu pacote.
  // Está vazio por enquanto.
  "keywords": [],

  // "author" → Nome do autor ou responsável pelo projeto.
  // Aqui está configurado como você: "Dario Reis".
  "author": "Dario Reis",

  // "license" → Licença do projeto.
  // "ISC" é uma licença permissiva, parecida com MIT, que permite uso livre do código.
  "license": "ISC",

  // "type" → Define o sistema de módulos utilizado pelo Node.js.
  // - "commonjs" (CJS) → padrão mais antigo do Node (usa require e module.exports).
  // - "module" (ESM) → padrão mais novo do JavaScript (usa import e export).
  "type": "commonjs"
}
