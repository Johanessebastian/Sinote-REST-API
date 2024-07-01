const db = require('../db/firebase');
const bcrypt = require('bcryptjs');

const User = {
  createUser: async (name, email, password, role) => {
    const hash = await bcrypt.hash(password, 10);
    await db.collection('users').add({ name, email, password: hash, role });
  },
  findUserByEmail: async (email) => {
    const snapshot = await db.collection('users').where('email', '==', email).get();
    return snapshot.empty ? null : snapshot.docs[0];
  },
  findUserByName: async (name) => {
    const snapshot = await db.collection('users').where('name', '==', name).get();
    return snapshot.empty ? null : snapshot.docs[0];
  },
};

module.exports = User;
