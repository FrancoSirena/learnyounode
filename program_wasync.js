var http = require('http');
var async = require('async');
var bl = require('bl');

async.parallel([
    function(callback) {
        http.get(process.argv[2], function(res){
            res.setEncoding('utf8')
            res.pipe(bl(function(err, data) {
                callback(err, data)
            }))
        }).on("error", function(err) {
            callback(err, null)
        })
       
    },
    function(callback) {
        http.get(process.argv[3], function(res){
            res.setEncoding('utf8')
            res.pipe(bl(function(err, data) {
                callback(err, data)
            }))
        }).on("error", function(err) {
            callback(err, null)
        })
       
    },
    function(callback) {
        http.get(process.argv[4], function(res){
            res.setEncoding('utf8')
            res.pipe(bl(function(err, data) {
                callback(err, data)
            }))
        }).on("error", function(err) {
            callback(err, null)
        })
       
    }
], function(err, data) {
    data.forEach(function(it, idx) {
        console.log(it.toString())
    })
})
