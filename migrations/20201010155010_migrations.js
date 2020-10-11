
exports.up = function(knex) {
  return knex.schema.createTable('lista', (table) => {
      table.increments();
      table.string('name');
      table.date('inserted');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('lista');
};
