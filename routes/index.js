var express = require('express');
var router = express.Router();
const Person = require('../models/User');
const redis = require('../config/redis');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Only using GET so that we can test using Browser. It's must be POST in real life
router.get('/mongo/add-person', async function(req, res, next) {
  const { name, age } = req.query;
  const person = new Person({
    name,
    age
  });

  await person.save();
  res.json(person);
});

router.get('/redis/add-person', async function(req, res, next) {
  const { name, age } = req.query;
  const person = { name, age };

  redis.setex(name, 60, JSON.stringify(person));
  res.json(person);
});

module.exports = router;
