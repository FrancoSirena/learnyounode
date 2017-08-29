var net = require('net');

var server = net.createServer(function(socket) {
    var dt = new Date();
    var m = "0".concat(dt.getMonth()+1);
    var d = "0".concat(dt.getDate());
    var mi = "0".concat(dt.getMinutes());
    var formatDate = dt.getFullYear() + '-' + m.substr(-2) + '-'+d.substr(-2)+' '+dt.getHours()+':'+mi.substr(-2);
    socket.end(formatDate.concat('\n'))
})

server.listen(process.argv[2])