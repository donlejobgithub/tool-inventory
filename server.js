const jsonserver = require('json-server');
const server = jsonServer.create();
const router =  jsonServer.router('tools.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3004;

server.use(middlewares);
server.use(router);

server.listen(port);