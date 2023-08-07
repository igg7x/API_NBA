import { pool } from "../db/connDb.js";

export const getPlayers = async (req, res) => {
  const [results] = await pool.query("SELECT * FROM jugador;");
  res.json(results);
};

export const getPlayerByName = async (req, res) => {
  const name = req.query.name;

  const [results] = await pool.query(
    "SELECT * FROM jugador WHERE nombre = ?  ;",
    [name]
  );

  if (results.length === 0) {
    res.status(404).json({ message: `No hay jugadores con nombre ${name}` });
  }
  res.json(results);
};

export const getPlayerByTeam = async (req, res) => {
  const team = req.query.team;

  const [results] = await pool.query(
    "SELECT * FROM jugador WHERE nombre_equipo = ?;",
    [team]
  );
  if (results.length === 0) {
    res
      .status(404)
      .json({ message: `No se encuentran jugadores con el equipo  ${team}` });
  }
  res.json(results);
};

export const getPlayerByOrigin = async (req, res) => {
  const origin = req.query.origin;
  const [results] = await pool.query(
    "SELECT * FROM jugador WHERE  procedencia = ?",
    [origin]
  );
  if (results.length === 0) {
    res.status(404).json({ message: `No hay jugadores de origen ${origin}` });
  }
  res.json(results);
};

export const getPlayerById = async (req, res) => {
  const code = req.query.code;
  const [results] = await pool.query(
    "SELECT * FROM jugador WHERE  codigo = ?",
    [code]
  );
  if (results.length === 0) {
    res.status(404).json({ message: `No hay jugadores con codigo ${code}` });
  }
  res.json(results);
};

export const getPlayerByPosition = async (req, res) => {
  const pos = req.query.pos;
  const [results] = await pool.query(
    "Select * from jugador where posicion = ?",
    [pos]
  );
  if (results.length === 0) {
    res.status(404).json({ message: `No hay jugadores con posicion ${pos}` });
  }
  res.json(results);
};
