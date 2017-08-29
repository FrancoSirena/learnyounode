var fs = require('fs')
try{
    fs.readFile(process.argv[2], 'utf8', function (err, data) {
        if (err)
            throw new TypeError("Problema na leitura");
        console.log(data.split('\n').length - 1);
    });    
} catch(e) {
    console.log("File not found".concat(e.message))
}
