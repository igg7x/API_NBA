import { createPool } from "mysql2/promise";
import {
  DB_DATABASE,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_USER,
} from "../config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  connectionLimit: 10,
  queueLimit: 0,
  waitForConnections: true,
  port: DB_PORT,
});
