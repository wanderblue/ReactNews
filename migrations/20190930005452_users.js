exports.up = function (knex, Promise) {
    knex.schema.withSchema('newsdb').hasTable('users')
      .then(function (exists) {
        if (!exists) {
          return knex.schema.createTable('users', table => {
            table.increments('id').primary();
            table.string('name');
            table.string('email').unique().notNullable();
            table.string('password');
            table.string('address');
            table.string('phone');
            table.string('city');
            table.string('state');
            table.string('zipCode');
            table.timestamps(false, true)
          })
        }
      })
  }
  
  exports.down = function (knex, Promise) {
    return knex.withSchema('newsdb').schema
      .dropTable('users')
  }