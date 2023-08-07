import { Router } from "express";
import {
  getPartidosBySeason,
  getPartidoBySeasonAndTeam,
  getPartidoByLocalTeam,
  getPartidoByVisitorTeam,
} from "../controllers/partido.controller.js";

const router = Router();
router.get("/partido/BySeason", getPartidosBySeason);
/**
 * @openapi
 * /Api-Nba/partido/BySeason:
 *  get:
 *     tags:
 *       - Games
 *     parameters:
 *       - in: query
 *         name: season
 *         schema:
 *           type: string
 *           description: The games to get by season
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
router.get("/partido/BySeasonAndTeam", getPartidoBySeasonAndTeam);
/**
 * @openapi
 * /Api-Nba/partido/BySeasonAndTeam:
 *  get:
 *     tags:
 *       - Games
 *     parameters:
 *       - in: query
 *         name: season
 *         schema:
 *           type: string
 *           description: The games to get by season
 *       - in: query
 *         name: team
 *         schema:
 *           type: string
 *           description: The games to get by  team
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

router.get("/partido/ByLocalTeam", getPartidoByLocalTeam);
/**
 * @openapi
 * /Api-Nba/partido/ByLocalTeam:
 *  get:
 *     tags:
 *       - Games
 *     parameters:
 *       - in: query
 *         name: team
 *         schema:
 *           type: string
 *           description: The games to get by Local Team
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

router.get("/partido/ByVisitorTeam", getPartidoByVisitorTeam);
/**
 * @openapi
 * /Api-Nba/partido/ByVisitorTeam:
 *  get:
 *     tags:
 *       - Games
 *     parameters:
 *       - in: query
 *         name: team
 *         schema:
 *           type: string
 *           description: The games to get by Visitor Team
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
