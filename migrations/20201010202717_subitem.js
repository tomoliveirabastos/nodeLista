
exports.up = function(knex) {
    return knex.schema.createTable('subitem', (table)=>{
        table.increments();
        table.string('name');
        table.string('ep');
        table.integer('item_id');
        table.integer('lista_id');
        table.string('descricao');
        table.date('inserted');
    });
};

exports.down = function(knex) {
  
};
