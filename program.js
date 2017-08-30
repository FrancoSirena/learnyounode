var http = require('http');
var url = require('url')

var server = http.createServer(function(req, res) {
    const pUrl = url.parse(req.url, true);
    if (pUrl.pathname === '/api/parsetime') {
        var dt = new Date(pUrl.query.iso);
        var jResp =  {
            "hour": dt.getHours(),
            "minute": dt.getMinutes(),
            "second": dt.getSeconds()
        };
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(jResp))
        
    } else if(pUrl.pathname === '/api/unixtime') {
        var dt = new Date(pUrl.query.iso);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({"unixtime": dt.getTime()}))
    } else {
        res.writeHead(404)
        res.end()
    }
});

server.listen(process.argv[2])