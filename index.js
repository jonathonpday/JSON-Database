const { readDb, writeDb } = require('./db_functions');

const dataObj = {
  name: 'Jonathon',
  favorite_40k_armies: ['custodes', 'necrons', 'orcs'],
  favorite_AOS: ['stormcast', 'soulblight', 'bonereapers'],
};

writeDb(dataObj);
