import express from "express";
import { UserRoutes, PostRoutes, AuthRoutes } from "./modules";
import middlewaresConfig from "./config/middlewares";

const app = express();
middlewaresConfig(app);

app.use("/api", [UserRoutes, PostRoutes, AuthRoutes]);

const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
  if (err) {
    console.error(`👽Houston we have a problem : ${err} ☠️`);
  }
  {
    console.log(`🎉 APP Listen to port: ${PORT} 🎉`);
  }
});
