/**
 * Created with JetBrains WebStorm.
 * User: Marek
 * Date: 25.2.2013
 * Time: 22:26
 * To change this template use File | Settings | File Templates.
 */

/*var server = require("./server");
var router = require("./router");

server.start(router.route);*/
var express  = require('express')
    , resource = require('express-resource')
    , app = express();
app.resource('pages', require('./app/pages'));
app.listen(process.env.PORT || 5000);