exports.seed = function(knex, Promise) {
	return knex('answer').del()
		.then(function() {
			return knex('question').del()
		}).then(function() {
			return knex('asker').del()
		})
}
