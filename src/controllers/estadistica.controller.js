import { pool } from "../db/connDb.js";

export const getEstadisticaByYear = async (req, res) => {
  const year = req.query.year;

  const [results] = await pool.query(
    `select temporada,sum(Puntos_por_partido) as'PPS' ,sum(Asistencias_por_partido) as 'APS',sum(Tapones_por_partido) as 'BPS' from estadistica where temporada= '${year}'`
  );

  if (results.length === 0) {
    res
      .status(404)
      .json({ message: `No hay estadisticas para el año ${year}` });
  }
  res.json(results);
};

export const getEstadisticaByYearAndTeam = async (req, res) => {
  const year = req.query.year;
  const team = req.query.team;

  const [results] = await pool.query(
    "Select temporada, equipo_local ,avg(puntos_local)  as 'PPG' from partido where temporada = ? and equipo_local = ? group by equipo_local",
    [year, team]
  );
  if (results.length === 0) {
    res
      .status(404)
      .json({ message: `No hay estadisticas para el año ${year}` });
  }
  res.json(results);
};

export const getEstadisticaByPlayerAndYear = async (req, res) => {
  const year = req.query.year;
  const name = req.query.name;

  const [results] = await pool.query(
    "select e.temporada,j.nombre,e.Puntos_por_partido,e.Asistencias_por_partido,e.Tapones_por_partido,e.Rebotes_por_partido from estadistica  e join jugador j on e.jugador = j.codigo where j.nombre = ? and e.temporada = ? ;",
    [name, year]
  );

  if (results.length === 0) {
    res.status(404).json({
      message: `No hay estadisticas para el año ${season} del jugador ${name}`,
    });
  }
  res.json(results);
};

const query = `SELECT
puntos.Max_Puntos_por_partido,
puntos.nombre AS Nombre_Puntos,
asistencias.Max_Asistencias_por_partido,
asistencias.nombre AS Nombre_Asistencias,
rebotes.Max_Rebotes_por_partido,
rebotes.nombre AS Nombre_Rebotes,
tapones.Max_Tapones_por_partido,
tapones.nombre AS Nombre_Tapones
FROM (
SELECT
    MAX(e.Puntos_por_partido) AS Max_Puntos_por_partido,
    j.nombre
FROM estadistica e
JOIN jugador j ON j.codigo = e.jugador
WHERE e.temporada =  ?  GROUP BY e.jugador
ORDER BY Max_Puntos_por_partido DESC
LIMIT 1
) AS puntos
JOIN (
SELECT
    MAX(e.Asistencias_por_partido) AS Max_Asistencias_por_partido,
    j.nombre
FROM estadistica e
JOIN jugador j ON j.codigo = e.jugador
WHERE e.temporada = ?
GROUP BY e.jugador
ORDER BY Max_Asistencias_por_partido DESC
LIMIT 1
) AS asistencias ON 1=1
JOIN (
SELECT
    MAX(e.Rebotes_por_partido) AS Max_Rebotes_por_partido,
    j.nombre
FROM estadistica e
JOIN jugador j ON j.codigo = e.jugador
WHERE e.temporada =  ? 
GROUP BY e.jugador
ORDER BY Max_Rebotes_por_partido DESC
LIMIT 1
) AS rebotes ON 1=1
JOIN (
SELECT
    MAX(e.Tapones_por_partido) AS Max_Tapones_por_partido,
    j.nombre
FROM estadistica e
JOIN jugador j ON j.codigo = e.jugador
WHERE e.temporada =  ? 
GROUP BY e.jugador
ORDER BY Max_Tapones_por_partido DESC
LIMIT 1
) AS tapones ON 1=1;`;

export const getMostPointsMostAssistsMostReboundsMostBlocksBySeason = async (
  req,
  res
) => {
  const season = req.query.season;

  const [results] = await pool.query(query, [season, season, season, season]);
  if (results.length === 0) {
    res.status(404).json({
      message: `No hay estadisticas para el año ${season} del jugador ${name}`,
    });
  }

  res.json(results);
};
