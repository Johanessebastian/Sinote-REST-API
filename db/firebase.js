const admin = require('firebase-admin');
const serviceAccount = require('./sinote-c7912-firebase-adminsdk-82ex8-9414a1de51.json'); // Adjust the path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sinote-c7912-default-rtdb.asia-southeast1.firebasedatabase.app/', // Replace with your DB URL
});

const db = admin.firestore();
module.exports = db;
