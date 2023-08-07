import { Router } from "express";

import {
  getPlayers,
  getPlayerByName,
  getPlayerByTeam,
  getPlayerByOrigin,
  getPlayerById,
  getPlayerByPosition,
} from "../controllers/jugador.controller.js";

const router = Router();

router.get("/jugador", getPlayers);
/**
 * @openapi
 * /Api-Nba/jugador:
 *  get:
 *     tags:
 *       - Players
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
router.get("/jugador/ById", getPlayerById);
/**
 * @openapi
 * /Api-Nba/jugador/ById:
 *  get:
 *     tags:
 *       - Players
 *     parameters:
 *       - in: query
 *         name: code
 *         schema:
 *           type: int
 *           description: The player to get
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

router.get("/jugador/ByName", getPlayerByName);
/**
 * @openapi
 * /Api-Nba/jugador/ByName:
 *  get:
 *     tags:
 *       - Players
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *           description: The player to get
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
router.get("/jugador/ByTeam", getPlayerByTeam);
/**
 * @openapi
 * /Api-Nba/jugador/ByTeam:
 *  get:
 *     tags:
 *       - Players
 *     parameters:
 *       - in: query
 *         name: team
 *         schema:
 *           type: string
 *           description: The player to get
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
router.get("/jugador/ByOrigin", getPlayerByOrigin);
/**
 * @openapi
 * /Api-Nba/jugador/ByOrigin:
 *  get:
 *     tags:
 *       - Players
 *     parameters:
 *       - in: query
 *         name: origin
 *         schema:
 *           type: string
 *           description: The player to get
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
router.get("/jugador/ByPosition", getPlayerByPosition);
/**
 * @openapi
 * /Api-Nba/jugador/ByPosition:
 *  get:
 *     tags:
 *       - Players
 *     parameters:
 *       - in: query
 *         name: pos
 *         schema:
 *           type: string
 *           description: The player to get
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
