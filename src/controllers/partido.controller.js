import { pool } from "../db/connDb.js";

export const getPartidosBySeason = async (req, res) => {
  const season = req.query.season;
  const [results] = await pool.execute(
    "SELECT * FROM partido WHERE temporada = ?",
    [season]
  );
  if (results.length === 0) {
    res
      .status(404)
      .json({ message: `No hay partidos para la temporada ${season}` });
  }

  res.json(results);
};

export const getPartidoByLocalTeam = async (req, res) => {
  const team = req.query.team;
  const [results] = await pool.execute(
    "SELECT * FROM partido WHERE equipo_local =?",
    [team]
  );
  if (results.length === 0) {
    res
      .status(404)
      .json({ message: `No hay partidos para el equipo local ${team}` });
  }
  res.json(results);
};

export const getPartidoByVisitorTeam = async (req, res) => {
  const team = req.query.team;
  const [results] = await pool.execute(
    "SELECT * FROM partido WHERE equipo_visitante =?",
    [team]
  );
  if (results.length === 0) {
    res.status(404).json({
      message: `No hay partidos para el equipo visitante ${team}`,
    });
  }
  res.json(results);
};

export const getPartidoBySeasonAndTeam = async (req, res) => {
  const season = req.query.season;
  const team = req.query.team;

  const [results] = await pool.execute(
    "select * from (select * from partido where equipo_local = ? or equipo_visitante=?)t where t.temporada  = ?",
    [team, team, season]
  );
  if (results.length === 0) {
    res.status(404).json({
      message: `No hay partidos para la temporada ${season}, el equipo local ${localTeam} y el equipo visitante ${visitorTeam}`,
    });
  }
  res.json(results);
};

// export const getPartidoBySeasonAndTeamAndPlayer = async (req, res) => {
//   const season = req.query.season;
//   const localTeam = req.query.localTeam;
//   const visitorTeam = req.query.visitorTeam;
//   const player = req.query.player;
// };
