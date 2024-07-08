const admin = require('firebase-admin');
const serviceAccount = require('./ganti dgn key firebase.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'ganti dgn link realtime databse firebase/', 
});

const db = admin.firestore();
module.exports = db;
