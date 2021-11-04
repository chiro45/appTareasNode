const fs = require('fs')
//definimos la ruta del archivo y le decimos que va  aser de tipo json
const archivo = './database/data.json';
const guardarDb = (data)=>{
    
    //usamos la funcion donde le mandamos el archivo
    // y le decimos que escriba un elemento dentro de el
    fs.writeFileSync(archivo, JSON.stringify( data))
}
//realizamos una funcion que lee el data.json
const leerDb = ()=>{
    //le decimos si no existe el archivo que retorne null
    if(!fs.existsSync(archivo)){
        return null;
    }
    //si existe le recimos que lea el archivo, con codificacion utf-8
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    //le decimos json. parse para que devuelva los datos en formato texto
    const data = JSON.parse(info);
    //retorna data con los archivos del txt
    return data
}
module.exports ={
    guardarDb,
    leerDb
}
