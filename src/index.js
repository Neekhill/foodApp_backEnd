const express = require('express');
const cors = require('cors');
const app = express();
const Db = require('./database/db');

const UserRoutes = require('./routes/user');
const OrderRoutes = require('./routes/order');
const RestaurantRoutes = require('./routes/restaurant');
const AuthRoutes = require('./routes/auth');

const AuthService = require('./service/authService');

app.use(cors());
app.use('/user', UserRoutes);
app.use('/order', OrderRoutes);
app.use('/restaurant', RestaurantRoutes);
app.use('/auth', AuthRoutes);

app.get('/', AuthService.checkIfAuthenticated, (req, res) => {
  res.send('Hello World');
})


app.listen(3001, () => {
  Db.connect()
    .then(() => console.log('Connection successfull!'))
    .catch((err) => console.log(`Error found! ${err}`));
  console.log('Started Listening!');
});