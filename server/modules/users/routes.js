import { Router } from "express";
import { authenticateToken } from "../utils/authenticate";
import * as UserController from "./controller";
const bodyParser = require("body-parser").json();
const routes = new Router();

routes.get("/", authenticateToken, UserController.welcome);
routes.get("/users", UserController.getAllUsers);
routes.get("/users/:id", UserController.getUserById);
routes.post("/users", bodyParser, UserController.createUser);
routes.delete("/users/:id", UserController.deleteUser);
routes.put("/users/:id", UserController.updateUser);

export default routes;
