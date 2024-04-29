const fs = require('fs');

function readDb(dbName = 'db.json') {
  // read JSON object from file
  const data = fs.readFileSync(dbName, 'uft-8');

  // parse JSON from JSON to object and return it.
  const converted_data = JSON.parse(data);
  return converted_data;
}

function writeDb(obj, dbName = 'db.json') {
  // Check the user has passed an object
  if (!obj) {
    return;
  }

  try {
    // convert your object to the JSON format
    let converted_data = JSON.stringify(obj);
    fs.writeFileSync(dbName, converted_data);
    console.log('Save Successful');
    // save JSON to our JSON database
  } catch (err) {
    console.log('Failed to save data\n', err.message);
  }
}

module.exports = {
  readDb,
  writeDb,
};
