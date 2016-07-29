exports.up = function(knex, Promise) {
	return knex.schema.createTable('asker', function(table) {
		table.increments();
		table.string('asker');
	}).then(function() {
		return knex.schema.createTable('question', function(table) {
			table.increments();
			table.text('question');
		})
	}).then(function() {
		return knex.schema.createTable('answer', function(table) {
			table.increments();
			table.integer('asker_id').references('id').inTable('asker').onDelete('cascade');
			table.integer('question_id').references('id').inTable('question').onDelete('cascade');
			table.text('response');
		})
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('answer')
	.then(function() {
		return knex.schema.dropTableIfExists('question')
	}).then(function() {
    return knex.schema.dropTableIfExists('asker')
  });
};
