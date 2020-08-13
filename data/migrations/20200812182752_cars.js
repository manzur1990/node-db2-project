exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('ID');
        tbl.text('vin', 128).unique().notNullable();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.decimal('milage').notNullable();
        tbl.text('transmission');
        tbl.text('title');
    })

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};