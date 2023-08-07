import { pool } from "../db/connDb.js";

export const getTeams = async (req, res) => {
  const [results] = await pool.query("SELECT * FROM equipo");
  res.json(results);
};

export const getTeamByName = async (req, res) => {
  const name = req.query.name;
  const [results] = await pool.query("SELECT * FROM equipo WHERE nombre = ?", [
    name,
  ]);

  if (results.length === 0) {
    res.status(404).json({ message: "Equipo no encontrado" });
  }
  res.json(results);
};

export const getTeamByCity = async (req, res) => {
  const city = req.query.city;
  const [results] = await pool.query("SELECT * FROM equipo WHERE ciudad = ?", [
    city,
  ]);

  if (results.length === 0) {
    res.status(404).json({ message: "Equipo no encontrado" });
  }
  res.json(results);
};

export const getTeamsByConference = async (req, res) => {
  const conference = req.query.conference;

  const [results] = await pool.query(
    "SELECT * FROM equipo WHERE conferencia=?",
    [conference]
  );
  if (results.length === 0) {
    res.status(404).json({ message: "Equipo no encontrado" });
  }
  res.json(results);
};

export const getTeamsByDivision = async (req, res) => {
  const division = req.query.division;

  const [results] = await pool.query("SELECT * FROM equipo WHERE division=?", [
    division,
  ]);
  if (results.length === 0) {
    res.status(404).json({ message: "Equipo no encontrado" });
  }
  res.json(results);
};
