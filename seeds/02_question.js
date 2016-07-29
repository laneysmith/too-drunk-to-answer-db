exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('question').insert({
			question: 'Where are you?'
		}),
		knex('question').insert({
			question: 'Where are you heading?'
		}),
		knex('question').insert({
			question: 'Why are you ignoring my texts?'
		}),
		knex('question').insert({
			question: 'Do you know why I pulled you over?'
		})
	]);
};
