import { Router } from "express";
import {
  getTeams,
  getTeamByName,
  getTeamsByConference,
  getTeamByCity,
  getTeamsByDivision,
} from "../controllers/equipo.controller.js";

const router = Router();

/**
 * @openapi
 * /Api-Nba/equipo:
 *   get:
 *     tags:
 *       - Teams
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
router.get("/equipo", getTeams);
/**
 * @openapi
 * /Api-Nba/equipo/name:
 *  get:
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *           description: The name of team to get
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
router.get("/equipo/name", getTeamByName);
/**
 * @openapi
 * /Api-Nba/equipo/city:
 *  get:
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *           description: The name of team to get
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
router.get("/equipo/city", getTeamByCity);
/**
 * @openapi
 * /Api-Nba/equipo/conference:
 *  get:
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: query
 *         name: conference
 *         schema:
 *           type: string
 *           description: The name of team to get
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
router.get("/equipo/conference", getTeamsByConference);
/**
 * @openapi
 * /Api-Nba/equipo/division:
 *  get:
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: query
 *         name: division
 *         schema:
 *           type: string
 *           description: The name of team to get
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
router.get("/equipo/division", getTeamsByDivision);

export default router;
