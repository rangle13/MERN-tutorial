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
    async function listDatabases() {
        const client = new MongoClient('mongodb://localhost:27017');
        try {

            //db.getcollectionNames()
    
           const db = client.db('testdb'); // replace with your database name
            const collections = await db.listCollections().toArray();
            console.log('Collections:');
            collections.forEach(col => console.log(` - ${col.name}`));
        } finally {
            
            await client.close();
        }
}
listDatabases().catch(console.error);
//otheer commands

// get current connection details - it should show Mark user
db.runCommand({
    connectionStatus: 1
})

// get Mark user roles
db.getUser("Mark")