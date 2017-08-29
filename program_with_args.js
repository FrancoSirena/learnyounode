var a = 0;

process.argv.forEach(function(i) {
            if (!isNaN(i))
                a += Number(i);
        })
console.log(a)