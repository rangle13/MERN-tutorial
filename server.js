const connectDB = require('./config/db'); // Import the DB connection function

const express = require('express');
const mongoose = require('mongoose');
// Load environment variables
const dotenv = require('dotenv').config;
const cors = require('cors');
const {
    MongoClient
} = require('mongodb');

dotenv.config;
const InventorySchema = require( './models/inventory'); // Import the Inventory model (ensure filename is 'inventory.js')
const ItemSchema = require('./models/item'); // Import the item model (ensure filename is 'inventory.js')
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017', {})
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB Connection Error:', err));

// Example Schema & Model


const Item = mongoose.model('Item', ItemSchema);
const Inventory = mongoose.model('Inventory', InventorySchema);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

async function listDatabases() {
    const client = new MongoClient('mongodb://localhost:27017');
    try {
        await client.connect();
        const databasesList = await client.db().admin().listDatabases();
        console.log('Databases:');
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    } finally {
        await client.close();
    }
}

async function listDocuments() {
    const client = new MongoClient('mongodb://localhost:27017');
    try {
        await client.connect();
        const db = client.db('testdb'); // replace 'test' with your database name
        const collection = db.collection('blogposts'); // replace 'items' with your collection name
        const documents = await collection.find().toArray();
        console.log('Documents:here');
        documents.forEach(doc => console.log(doc));
    } finally {
        await client.close();
    }
}
listDatabases();
listDocuments().catch(console.error);