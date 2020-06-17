const redis = require('redis');

const port = process.env.REDIS_PORT || 6379;

let client = redis.createClient({
  host: 'redis-server', // redis service from docker-compose.yml
  port
});

module.exports = client;
