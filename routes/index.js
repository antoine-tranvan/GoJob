var express = require("express");
var router = express.Router();
const sum = require("../js/sum");

let cities = ["Paris", "Marseille", "Lyon", "Aix-en-Provence"];

/* GET home page. */
router.get("/", function (req, res, next) {
  let newCities = [];

  function optimalCities(cities) {
    newCities = cities.filter((el) => el.length > 6);
    return newCities;
  }

  optimalCities(cities);

  console.log(sum(1, 2));

  console.log(newCities);

  res.json({ newCities });
});

module.exports = router;
