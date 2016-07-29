exports.up = function(knex, Promise) {
  return knex.schema.createTable('answers', function(table) {
    table.increments();
    table.string('asker');
    table.text('question');
    table.text('response');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('answers');
};
