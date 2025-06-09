const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const {
    MongoClient
} = require('mongodb');
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mern-tutorial', {
       
    })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB Connection Error:', err));

// Example Schema & Model
const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
});

const Item = mongoose.model('Item', ItemSchema);

// Routes
app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch items'
        });
    }
});

app.post('/api/items', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({
            error: 'Failed to create item'
        });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
async function listDatabases() {
    const client = new MongoClient('mongodb://localhost:27017');
    try {
        
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
        
        const db = client.db('KPottery'); // replace 'test' with your database name
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