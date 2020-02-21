
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
					id: 1,
					name: "Get In Shape",
					description: "It's gonna take some work",
					completed: 0
				}
      ]);
    });
};
