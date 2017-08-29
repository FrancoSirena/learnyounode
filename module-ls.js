var fs = require('fs');
var path = require('path');


module.exports =
	function (dir, ext, callback) {
		fs.readdir(dir, function (err, list) {
	        if (err){
	            return callback(err, null);
	        	
	        }
	        callback(null, list.filter(function(it) {
	        	if (path.extname(it).toLowerCase().replace('.','') == ext.toLowerCase())
	        		return it;
	        }));
	    });   
	};