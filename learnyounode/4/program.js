var fs = require('fs');
var count = 0;
var i;
function readFile(){
    fs.readFile(process.argv[2], function(err, data){
        if (err) throw err;
        for (i = 0; i < data.length; i++){
                if (data[i] == 10) // newline code
                    count++;
        };
        console.log(count++);      
    });
};

readFile();
