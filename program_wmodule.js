var modLs = require('./module-ls.js');
modLs(process.argv[2], process.argv[3], function(err, data) {
	data.forEach(function(it) {
		console.log(it);
	})
})