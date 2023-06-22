const path = require("path");
const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser());

server.use((req, next) => {
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

server.use(middlewares);
server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
