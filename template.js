const json2csv = require('json2csv').Parser;
 
exports.get = function(req, res) {    
    const fields = ['dorsal', 'apellidos', 'nombre', 'categoria', 'sexo'];
    const dataEx = [{'dorsal': 3212, 'apellidos': 'Gutierrez Gomez', 'nombre': 'Ramiro', 'categoria': 'Veterano', 'sexo': 0},
                    {'dorsal': 5431, 'apellidos': 'Fernandez Lopez', 'nombre': 'Juana', 'categoria': 'Veterano', 'sexo': 1}];
    const parser = new json2csv({ fields });
    const csv = parser.parse(dataEx);
    res.set("Content-Disposition", "attachment;filename=authors.csv");
    res.set("Content-Type", "application/octet-stream");
    res.send(csv);
};