exports.up = (pgm) => {
    pgm.createTable("users", {
      id: "id", // BIGSERIAL PRIMARY KEY
      username: { type: "text", notNull: true },
      email: { type: "text", notNull: true, unique: true },
      type: { type: "text", notNull: true },
    });
  };
  
  exports.down = (pgm) => {
    pgm.dropTable("users");
  };