const User = require('../database/model/user');
const bluebird = require('bluebird');
const bcrypt = bluebird.promisifyAll(require('bcrypt'));

function createUser(fName, lName, email, age, password) {
  return bcrypt.hash(password, 5)
  .then(hashedPassword => {
    const newUser = User({ firstName: fName, lastName: lName,   email: email, age: age, password: hashedPassword
  });
  
    return newUser.save();
  })
  
}

function fetchUsers() {
  return User.find();
}

function fetchUserByUserId(id) {
  return User.find({ _id: id });
}



module.exports = {
  createUser: createUser,
  fetchUsers: fetchUsers,
  fetchUserByUserId: fetchUserByUserId
};