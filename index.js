import express from "express";
import routerEquipo from "./src/routes/equipo.routes.js";
import routerEstadistica from "./src/routes/estadistica.routes.js";
import routerJugador from "./src/routes/jugador.routes.js";
import routerPartido from "./src/routes/partido.routes.js";
import { PORT } from "./src/config.js";
import apicache from "apicache";

// import { hsts } from "helmet";

import { swaggerDocs } from "./src/swagger.js";

const cache = apicache.middleware;
const app = express();
// app.use(hsts());
app.use(express.json());
app.use(cache("5 minutes"));
app.use("/Api-Nba", routerEquipo);
app.use("/Api-Nba", routerEstadistica);
app.use("/Api-Nba", routerJugador);
app.use("/Api-Nba", routerPartido);

app.listen(PORT, () => {
  swaggerDocs(app, PORT);
});
