var fs = require('fs')
try{
    var buffer = fs.readFileSync(process.argv[2]);
    var fileString = buffer.toString();

    console.log(fileString.split('\n').length - 1);
} catch(e) {
    console.log("File not found".concat(e.message))
}
