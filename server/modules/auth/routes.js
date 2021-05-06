import { Router } from "express";
import * as AuthController from "./controller";

const routes = new Router();

routes.post("/login", AuthController.login);
routes.post("/token", AuthController.token);
routes.delete("/logout", AuthController.logout);

export default routes;
