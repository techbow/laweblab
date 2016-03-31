var settings = require('../setting'),
        Db = require('mongodb').Db,
        Connection = require('mongodb').Connection,
        Server = require('mongodb').Server;

var dbApp = new Db(settings.db, new Server(settings.host, settings.port),
 {safe: true});

module.exports = dbApp;