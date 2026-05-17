const { listRequests, getRequestDetailsById } = require("../db/repositories/request.repo");

async function listRequestsHandler(req, res) {
  try {
    const requests = await listRequests();
    return res.json(requests);
  } catch (err) {
    console.error("listRequestsHandler error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
async function getRequestDetailsHandler(req, res) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
      return res.status(400).json({ message: "id must be an integer" });
    }

    const request = await getRequestDetailsById(id);
    if (!request) return res.status(404).json({ message: "Request not found" });

    return res.json(request);
  } catch (err) {
    console.error("getRequestDetailsHandler error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  listRequestsHandler,
  getRequestDetailsHandler,
};