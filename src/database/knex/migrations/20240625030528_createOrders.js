exports.up = knex => knex.schema.createTable('orders', table => {
    table.increments('id');
    table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.timestamp('created_at').default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('orders');