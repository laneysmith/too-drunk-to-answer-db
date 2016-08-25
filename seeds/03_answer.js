var find = require('../helper.js');

exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('asker').select(),
		knex('question').select()
	]).then(function(result) {
		var asker = result[0];
		var question = result[1];
		return Promise.all([
			// Inserts seed entries
			knex('answer').insert({
				asker_id: find.findFromList('mom', asker, 'asker'),
				question_id: find.findFromList('Where are you?', question, 'question'),
				response: "Can't say where I am, but I can tell you where I'm not."
			}),
			knex('answer').insert({
				asker_id: find.findFromList('mom', asker, 'asker'),
				question_id: find.findFromList('Where are you?', question, 'question'),
				response: "At the library."
			}),
			knex('answer').insert({
				asker_id: find.findFromList('mom', asker, 'asker'),
				question_id: find.findFromList('Where are you heading?', question, 'question'),
				response: "To church."
			}),
			knex('answer').insert({
				asker_id: find.findFromList('girlfriend/boyfriend', asker, 'asker'),
				question_id: find.findFromList('Where are you?', question, 'question'),
				response: "I'm at a Java meet-up. I'll be home soon."
			}),
			knex('answer').insert({
				asker_id: find.findFromList('girlfriend/boyfriend', asker, 'asker'),
				question_id: find.findFromList('Where are you heading?', question, 'question'),
				response: "Out with my friends Jack and Jim."
			}),
			knex('answer').insert({
				asker_id: find.findFromList('cop', asker, 'asker'),
				question_id: find.findFromList('Where are you heading?', question, 'question'),
				response: "Looking for the fella who stole my shoes."
			}),
			knex('answer').insert({
				asker_id: find.findFromList('cop', asker, 'asker'),
				question_id: find.findFromList('Where are you heading?', question, 'question'),
				response: "Wouldn't you like to know."
			}),
			knex('answer').insert({
				asker_id: find.findFromList('cop', asker, 'asker'),
				question_id: find.findFromList('Do you know why I pulled you over?', question, 'question'),
				response: "Does it have anything to do with me driving 7mph on the sidewalk?"
			}),
			knex('answer').insert({
				asker_id: find.findFromList('friend', asker, 'asker'),
				question_id: find.findFromList('Where are you heading?', question, 'question'),
				response: "Out with my friends Jack and Jim."
			})
		]);
	})
};
