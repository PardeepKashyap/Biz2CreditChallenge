var fs= require('fs');
var readJSONFromTextFile= function(){
    let customers = [];
    return new Promise((resolve,reject)=> {
        fs.readFile('./resource/customer.text', function(err, data) {
            if(err) 
                reject(err);
            var list = data.toString().split("\n");
            for(i in list) {  
                  customers.push(JSON.parse(list[i])); 
                  resolve(customers)  
            }
        })
    })  
}
exports.readJSONFromTextFile= readJSONFromTextFile;