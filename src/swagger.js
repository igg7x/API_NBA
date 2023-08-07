// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUIExpress from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NBA-API",
      version: "1.0.0",
      description:
        " This NBA API has all the nba teams, all the players (from the 98-99 season to the 2011-2012 season) and with more than 15k records about matches",
    },
  },
  apis: [
    "src/routes/equipo.routes.js",
    "src/routes/estadistica.routes.js",
    "src/routes/jugador.routes.js",
    "src/routes/partido.routes.js",
    "src/db/connDn.js",
  ],
};

// Docs Json format

const swaggerDoc = swaggerJSDoc(swaggerOptions);

export const swaggerDocs = (app, PORT) => {
  app.use(
    "/api/v1/docs",
    swaggerUIExpress.serve,
    swaggerUIExpress.setup(swaggerDoc)
  );
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerDoc);
  });
};
