const csv = require('fast-csv');
const {Runner} = require('./Runner');
const nentries = 500;
 
exports.post = function (req, res) {
    if (!req.files){
        return res.status(400).send('Ningun archivo subido');
    }
    let runnersFile = req.files.file;
    let runners = [];
    let totalentries = 0;
    csv
     .fromString(runnersFile.data.toString(), {
         headers: false,
         ignoreEmpty: false
     })
     .on("data", function(data){
         let runner = new Runner({
             dorsal: parseInt(data[0]),
             apellidos: data[1],
             nombre: data[2],
             categoria: data[3]
         })
         runners.push(runner);
         if (runners.length === nentries){
            Runner.collection.insertMany(runners, function(err, documents) {
                if (err){
                    throw err;
                }
            });
            totalentries += nentries;
            runners = [];
         }
     })
     .on("end", function(){
        Runner.collection.insertMany(runners, function(err, documents) {
            if (err){
                throw err;
            }
        });
        totalentries += runners.length
        res.send(totalentries + ' entradas subidas a base de datos.');
     });
};