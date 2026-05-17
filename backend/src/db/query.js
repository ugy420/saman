const pool = require("./pool");

async function queryDB(text, params) {
  const res = await pool.query(text, params);
  return res.rows;
}

module.exports = { queryDB };