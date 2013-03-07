/**
 * Created with JetBrains WebStorm.
 * User: Marek
 * Date: 25.2.2013
 * Time: 22:24
 * To change this template use File | Settings | File Templates.
 */
/*var http = require("http");
var url = require("url");*/
var pocet = 0;
var express  = require('express')
    , resource = require('express-resource')
    , app = express();
app.resource('pages', require('./app/pages'));
app.listen(process.env.PORT || 5000);
/*
function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello Wosasrld");
        response.end(++pocet + '');
        //response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
    */