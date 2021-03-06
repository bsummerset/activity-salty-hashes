const bcrypt = require('bcryptjs');

// Create a "salt" with 10 salt rounds
// For reference: https://www.npmjs.com/package bcryptjs#gensaltsyncrounds-seed_length
const salt = bcrypt.genSaltSync(10);
console.log(salt);

// Use the salt to create a hash from this password.
// Reference: https://www.npmjs.com/package/bcryptjs#hashsyncs-salt
const password = "super-secret-password";
const hashedPassword = bcrypt.hashSync(password, salt);


console.log(hashedPassword) ;