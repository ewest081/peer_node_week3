/**
 * Created by cwgraff on 1/5/16.
 */

var http = require('http');
var balance = require('./balance');
//var cashMoney = require('./currency');

http.createServer(function(request, response){

    response.writeHead(200);

    //response.write(random().toString());
    response.write(balance.message());
    response.write(balance.money().toString());

    response.end();

}).listen(3000);

console.log("Listening on port 3000!");