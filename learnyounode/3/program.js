var fs = require('fs');
var count = 0;
var i;
fs.createReadStream(process.argv[2])
    .on('data', function(data){
        for (i = 0; i < data.length; i++){
            if (data[i] == 10) // newline code
                count++;
        };
    })
    .on('end', function(){
        console.log(count);
    });
   



