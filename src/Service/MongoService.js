const { MongoClient } = require('mongodb');

let client = null;

/**
 * Opens connection between client and database
 */
async function databaseConnect() {
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster-app.mxqexwg.mongodb.net/?retryWrites=true&w=majority`;
    try {
        client = new MongoClient(uri);
        await client.connect();
        console.log('Successfully connected to database.')
    } catch {
        console.log(e);
    }
}

/**
 * Closes database connection if client not null
 */
async function databaseClose() {
    if (client == null) {
        return;
    }
    client.close();
}

/**
 * Queries the first user-given amount of entrees within the database.
 *  
 * @param {*} num 
 * @returns 
 */
async function find(num) {
    if (client == null) {
        return;
    }
    let db = client.db(process.env.DATABASE_NAME);
    let patients = db.collection(process.env.DATABASE_COLLECTION);

    return patients.find().limit(num);
}