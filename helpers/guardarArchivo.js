const fs = require('fs')
//definimos la ruta del archivo y le decimos que va  aser de tipo json
const archivo = './database/data.json';
const guardarDb = (data)=>{
    
    //usamos la funcion donde le mandamos el archivo
    // y le decimos que escriba un elemento dentro de el
    fs.writeFileSync(archivo, JSON.stringify( data))
}
const leerDb = ()=>{
    if(!fs.existsSync(archivo)){
        return null;
    }
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info);

    return data
}
module.exports ={
    guardarDb,
    leerDb
}
