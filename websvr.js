/**
 * Created by Ali sabha on 5/26/2017.
 */
var http=require('http');
http.createServer(function (request,response) {
     response.writeHead(200, {'Content-Type': 'text/html'});

     response.write('Hello World, my name is Ali Sabha');

}).listen(8001);
console.log('server Started');