exports.up = function(knex, Promise) {
    return knex.schema.createTable('items', table => {
        table.increments();
        table.string('name').notNullable();
        table.integer('initial_price').notNullable();
        table.string('description').notNullable();
        table.string('img_url');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('items');
};
