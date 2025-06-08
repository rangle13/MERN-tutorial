// Example: List all MongoDB databases using the native driver
const {
    MongoClient
} = require('mongodb');

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

listDatabases().catch(console.error);