exports.up = function (knex, Promise) {
    knex.schema.withSchema('newsdb').hasTable('top_headlines')
      .then(function (exists) {
        if (!exists) {
          return knex.schema.createTable('topheadlines', table => {
            table.increments('id');
            table.string('author');
            table.string('title').notNullable();
            table.string('description');
            table.string('content', 1000);
            table.string('url');
            table.string('urlToImage');
            table.dateTime('publishedAt');
            table.timestamps(false, true)
          })
        }
      })
  }
  
  exports.down = function (knex, Promise) {
    return knex.withSchema('newsdb').schema
      .dropTable('top_headlines')
  }