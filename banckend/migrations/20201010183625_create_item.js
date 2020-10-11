
exports.up = function(knex) {
    return knex.schema.createTable('item', (table)=>{
        table.increments();
        table.string('name');
        table.date('inserted');
        table.string('descricao');
        table.integer('lista_id');
    });
};

exports.down = function(knex) {
    return knex.schama.dropTable('item');
};
