const http = require("http");
const app = require("./app");

const server = http.createServer(app);

server.listen(3007, () => {
    console.log("Express rodando na rota 3007...")
});