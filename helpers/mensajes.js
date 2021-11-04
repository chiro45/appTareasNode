const { resolve } = require('path');

require('colors')

//la funcion pausa hace que se espere una vez que el usuario ingresa un dato 
//y cuando este aprete enter recien deja que continue el programa
const pausa = ()=>{
    return new Promise(resolve=>{
        //hacemos una constante que lea la linea
    const readline = require('readline').createInterface({
        //ingresa datos el usuario
        input: process.stdin,
        //termina el proceso
        output: process.stdout
});
        //usuarmos el quertion del inquire y mostramos un mensaje
        readline.question(`\n Presione ${'ENTER'.green} para continuar \n`, ()=>{
        //lee la salida
        readline.close();
        //ejecuta el resolve
        resolve();
});
    
});
};


module.exports = pausa;