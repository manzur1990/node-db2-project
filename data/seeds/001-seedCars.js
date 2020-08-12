
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('cars').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('cars').insert([
          {vin: '654365436', make: 'nissan', model: 'rogue', milage: '321651', transmission: 'automatic', title: 'salvage' },
          {vin: '65465444', make: 'toyota', model: 'corola', milage: '6546', transmission: 'automatic', title: 'salvage' },
          {vin: '65464666', make: 'jeep', model: 'ravanger', milage: '65466', transmission: 'automatic', title: 'clean' }
        ]);
      });
  };