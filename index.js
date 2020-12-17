const bcrypt = require('bcryptjs');

// Create a "salt" with 10 salt rounds
// For reference: https://www.npmjs.com/package/bcryptjs#gensaltsyncrounds-seed_length

// Use the salt to create a hash from this password.
// Reference: https://www.npmjs.com/package/bcryptjs#hashsyncs-salt
const password = "super-secret-password";


// console.log() the hash
