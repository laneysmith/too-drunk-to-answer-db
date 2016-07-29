exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('asker').insert({
			asker: 'mom'
		}),
		knex('asker').insert({
			asker: 'cop'
		}),
		knex('asker').insert({
			asker: 'friend'
		}),
		knex('asker').insert({
			asker: 'girlfriend/boyfriend'
		})
	]);
};
