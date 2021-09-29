const Schema = require('mongoose').Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  age: Number,
  noOfOrders: { type: Number, "default": 0 },
  password: { type: String, required: true, "default": "Helloworld123#"}
});

module.exports = userSchema;