import { Router } from "express";

import {
  getEstadisticaByYear,
  getEstadisticaByYearAndTeam,
  getEstadisticaByPlayerAndYear,
  getMostPointsMostAssistsMostReboundsMostBlocksBySeason,
} from "../controllers/estadistica.controller.js";

const router = Router();

router.get("/estadistica", getEstadisticaByYear);
/**
 * @openapi
 * /Api-Nba/estadistica:
 *  get:
 *     tags:
 *       - Stadistics
 *     parameters:
 *       - in: query
 *         name: year
 *         schema:
 *           type: string
 *           description: The stadistics to get
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get("/estadistica/ByYandT", getEstadisticaByYearAndTeam);
/**
 * @openapi
 * /Api-Nba/estadistica/ByYandT:
 *  get:
 *     tags:
 *       - Stadistics
 *     parameters:
 *       - in: query
 *         name: year
 *         schema:
 *           type: string
 *           description: The stadistics to get
 *       - in: query
 *         name: team
 *         schema:
 *           type: string
 *           description: The stadistics to get
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get("/estadistica/ByYandP", getEstadisticaByPlayerAndYear);
/**
 * @openapi
 * /Api-Nba/estadistica/ByYandP:
 *  get:
 *     tags:
 *       - Stadistics
 *     parameters:
 *       - in: query
 *         name: year
 *         schema:
 *           type: string
 *           description: The year to get stadistics
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *           description: The name of player
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get(
  "/estadistica/ByFields",
  getMostPointsMostAssistsMostReboundsMostBlocksBySeason
);
/**
 * @openapi
 * /Api-Nba/estadistica/ByFields:
 *  get:
 *     tags:
 *       - Stadistics
 *     parameters:
 *       - in: query
 *         name: season
 *         schema:
 *           type: string
 *           description: The year to get stadistics
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
export default router;
