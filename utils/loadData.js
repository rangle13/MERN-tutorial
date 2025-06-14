const mongoose = require('mongoose');
const fs = require('fs');
const Inventory = require('../models/Inventory'); // Corrected path
// Ensure the Inventory model is correctly imported

mongoose.connect('mongodb://localhost:27017/mern-tutorial', {
}).then(async () => {
    const data = JSON.parse(fs.readFileSync('./data/inventory.json', 'utf-8'));
    await Inventory.insertMany(data);
    console.log('Inventory loaded!');
    mongoose.disconnect();
}).catch(err => {
    console.error(err);
});