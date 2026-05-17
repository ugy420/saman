exports.up = (pgm) => {
  pgm.createTable("requests", {
    id: "id", // BIGSERIAL PRIMARY KEY
    status: { type: "text", notNull: true, default: "PENDING" },
    user_id: { type: "bigint", notNull: true },
    requested_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("now()"),
    },
  });

  pgm.addConstraint("requests", "requests_user_id_fk", {
    foreignKeys: {
      columns: "user_id",
      references: "users(id)",
      onDelete: "cascade",
      onUpdate: "cascade",
    },
  });

  pgm.createIndex("requests", "user_id");


  pgm.addConstraint("requests", "requests_status_allowed", {
    check: "status IN ('PENDING', 'APPROVED', 'REJECTED')",
  });
};

exports.down = (pgm) => {
  pgm.dropTable("requests");
};