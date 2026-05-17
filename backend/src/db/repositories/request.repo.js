const { queryDB } = require("../query");

async function listRequests() {
  return queryDB(
    `
        SELECT id, status, user_id, requested_at
        FROM requests
        ORDER BY requested_at DESC, id DESC
    `
  );
}

async function getRequestDetailsById(userId) {
  const rows = await queryDB(
    `
      SELECT
        r.id           AS request_id,
        r.status       AS status,
        r.user_id      AS user_id,
        r.requested_at AS requested_at,

        ri.id          AS request_item_id,
        ri.quantity    AS quantity,

        i.id           AS item_id,
        i.name         AS item_name
      FROM requests r
      LEFT JOIN request_items ri ON ri.request_id = r.id
      LEFT JOIN items i ON i.id = ri.item_id
      WHERE r.user_id = $1
      ORDER BY r.requested_at DESC, r.id DESC, ri.id ASC
    `,
    [userId]
  );

  // group rows by request_id
  const byRequestId = new Map();

  for (const row of rows) {
    if (!byRequestId.has(row.request_id)) {
      byRequestId.set(row.request_id, {
        id: row.request_id,
        status: row.status,
        userId: row.user_id,
        requestedAt: row.requested_at,
        items: [],
      });
    }

    if (row.request_item_id !== null) {
      byRequestId.get(row.request_id).items.push({
        requestItemId: row.request_item_id,
        itemId: row.item_id,
        itemName: row.item_name,
        quantity: row.quantity,
      });
    }
  }

  return Array.from(byRequestId.values());
}
module.exports = {
  listRequests,
  getRequestDetailsById,
};