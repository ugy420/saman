const { createUser, getUserById, listUsers } = require("../db/repositories/user.repo");

async function createUserHandler(req, res) {
  try {
    const { username, email, type } = req.body;

    if (!username || !email || !type) {
      return res.status(400).json({ message: "username, email, type are required" });
    }

    const user = await createUser({ username, email, type });
    return res.status(201).json(user);
  } catch (err) {
    // unique violation (email)
    if (err && err.code === "23505") {
      return res.status(409).json({ message: "Email already exists" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
}


async function getUserByIdHandler(req, res) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
      return res.status(400).json({ message: "id must be an integer" });
    }

    const user = await getUserById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(user);
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function listUsersHandler(req, res) {
  try {
    const users = await listUsers();
    return res.json(users);
  } catch (err) {
    console.error("listUsersHandler error:", err); // <--- add this
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  createUserHandler,
  getUserByIdHandler,
  listUsersHandler,
};