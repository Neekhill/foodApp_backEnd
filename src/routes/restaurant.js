const express = require('express');
const router = express.Router();
const restaurantService = require('../service/restaurantService');

/** Returns the complete list of restaurants */
router.get('/', (req, res) => {
  console.log(req.query);
  if (typeof req.query.pincode !== 'undefined') {
    return restaurantService.fetchRestaurantsByPincode(req.query.pincode)
    .then(restaurants => {
      res.send(restaurants);
    })
    .catch(error => {
      res.error(error);
    });
  }
  else {
    return restaurantService.fetchRestaurants()
    .then(restaurants => {
      res.send(restaurants);
    })
    .catch(error => {
      res.error(error);
    });
  }
});

router.post('/', (req, res) => {

  return restaurantService.createRestaurant(req.query.name,
  req.query.pincode, req.query.address, req.query.image)
  .then(() => {
    console.log('Restaurant created successfully!')
    res.send('Restaurant created successfully!');
  })
  .catch(error => {
    res.error(error);
  })
});

module.exports = router;
