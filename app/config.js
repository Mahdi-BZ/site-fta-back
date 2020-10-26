var config = module.exports
var PRODUCTION = process.env.NODE_ENV === 'production'

config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: '151.80.123.213'
}

config.mongodb = {
  port: process.env.MONGODB_PORT || 27017,
  host: process.env.MONGODB_HOST || '151.80.123.213'
}
