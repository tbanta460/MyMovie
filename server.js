const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./dataJSON/movie.json');
const middlewares = jsonServer.defaults({
  static: './build'
});
const PORT = 3010;
server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});