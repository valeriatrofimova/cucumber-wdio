/**
 * Used for library tests
 */

const HomePage = require('./pages/HomePage');
const CareerPage = require('./pages/CareerPage')
const RozetkaPage = require('./pages/RozetkaPage')
module.exports = {
  HomePage: new HomePage(), 
  CareerPage: new CareerPage(),
  RozetkaPage: new RozetkaPage()
};