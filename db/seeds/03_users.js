
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Race Carpenter', email: 'race@carpenter.com', password: 'password', location_id: 1},
        {name: 'Vinni Otchkov', email: 'vinni@otchkov.com', password: 'password', location_id: 4},
        {name: 'Tom Martin', email: 'tom@martin.com', password: 'password', location_id: 6},
      ]);
    });
};
