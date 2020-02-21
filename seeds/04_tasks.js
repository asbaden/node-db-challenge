
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
					id: 1,
					description: "Go to the gym",
					notes: "it sucks",
					completed: 0,
					project_id: 1
				},
      ]);
    });
};
