const { queryDB } = require("../query");

async function createUser({ username, email, type }) {
  const rows = await queryDB(
    `
      INSERT INTO users (username, email, type)
      VALUES ($1, $2, $3)
      RETURNING id, username, email, type
    `,
    [username, email, type]
  );
  return rows[0];
}

async function getUserById(id) {
  const rows = await queryDB(
    `
      SELECT id, username, email, type
      FROM users
      WHERE id = $1
    `,
    [id]
  );
  return rows[0] || null;
}

async function listUsers() {
  return queryDB(
    `
      SELECT id, username, email, type
      FROM users
      ORDER BY id ASC
    `
  );
}

module.exports = {
  createUser,
  getUserById,
  listUsers,
};