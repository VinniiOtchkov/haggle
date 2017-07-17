
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: 'amplifier', initial_price: 1000, description: 'Like new', img_url: ''},
        {name: 'tv', initial_price: 100, description: '47 inch 1080p but has burnt out pixels', img_url: ''},
        {name: 'bass guitar', initial_price: 3000, description: 'Got it from Eddie Van Halen himself', img_url: ''},
        {name: 'guitar pick', initial_price: 1000, description: 'used by Eric Clapton', img_url: ''},
      ]);
    });
};
