exports.up = (pgm) => {
    pgm.createTable("items", {
      id: "id", // BIGSERIAL PRIMARY KEY
      name: { type: "text", notNull: true },
      stock: { type: "integer", notNull: true, default: 0 },
      category: { type: "text", notNull: true },
    });
  
    // Optional: prevent negative stock
    pgm.addConstraint("items", "items_stock_non_negative", {
      check: "stock >= 0",
    });
  };
  
  exports.down = (pgm) => {
    pgm.dropTable("items");
  };