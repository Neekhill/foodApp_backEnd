const express = require('express');
const router = express.Router();
const UserService = require('../service/userService');
const AuthService = require('../service/authService');

router.get('/', (req, res) => {
  UserService.fetchUsers()
  .then(users => {
    console.log(`Authenticated user = ${req.userId}`);
    console.log('New service here!!');
    res.send(users)
  })
  .catch(error => {
    res.send(error);
  });
});

router.post('/', (req, res) => {
  UserService.createUser('Anjit', ' ', 'anjit@gmail.com', 27, 'Hello')
  .then(() => {
    console.log('User created successfully!')
    res.send('User created successfully!');

  })
  .catch((err) => {
    console.log(`Error in creation ${err}`);
    res.send('User not created, due to error');
  });

});

router.get('/hello', (req, res) => {
  res.send('Hello end point called for user');
})


module.exports = router;