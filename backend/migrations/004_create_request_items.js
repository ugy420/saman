exports.up = (pgm) => {
  pgm.createTable("request_items", {
    id: "id", // BIGSERIAL PRIMARY KEY
    request_id: { type: "bigint", notNull: true },
    item_id: { type: "bigint", notNull: true },
    quantity: { type: "integer", notNull: true, default: 1 },
  });

  // FKs
  pgm.addConstraint("request_items", "request_items_request_id_fk", {
    foreignKeys: {
      columns: "request_id",
      references: "requests(id)",
      onDelete: "cascade",
      onUpdate: "cascade",
    },
  });

  pgm.addConstraint("request_items", "request_items_item_id_fk", {
    foreignKeys: {
      columns: "item_id",
      references: "items(id)",
      onDelete: "restrict",
      onUpdate: "cascade",
    },
  });

  // Prevent duplicates: one item appears once per request
  pgm.addConstraint("request_items", "request_items_request_item_unique", {
    unique: ["request_id", "item_id"],
  });

  // Helpful indexes
  pgm.createIndex("request_items", "request_id");
  pgm.createIndex("request_items", "item_id");

  // Guards
  pgm.addConstraint("request_items", "request_items_quantity_positive", {
    check: "quantity > 0",
  });
};

exports.down = (pgm) => {
  pgm.dropTable("request_items");
};