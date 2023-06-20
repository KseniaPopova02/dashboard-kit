const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (
    req.method === "POST" &&
    (req.path === "/contacts" || req.path === "/tasks")
  ) {
    const newData = req.body;
    const currentData = router.db.get(req.path).value();
    const updatedData = [newData, ...currentData];
    router.db.set(req.path, updatedData).write();
  }
  next();
});

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

server.use(middlewares);
server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running on port 3001");
});
