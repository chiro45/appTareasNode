const { resolve } = require('path');

require('colors')



const mostrarMenu = ()=>{
    return new Promise(resolve =>{

    console.log(` ${'1.'.green} Crear tarea`)
    console.log(` ${'2.'.green} Listar tareas`)
    console.log(` ${'3.'.green} Listar tareas completadas`)
    console.log(` ${'4.'.green} Listar tareas pendientes`)
    console.log(` ${'5.'.green} Completar tareas`)
    console.log(` ${'6.'.green} Borrar Tarea`)
    console.log(` ${'0.'.green} Salir`)
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
});
    readline.question("Selecciones una opcion: ", (opcion)=>{
        readline.close();
        resolve(opcion);
});

});
    
};

const pausa = ()=>{
    return new Promise(resolve=>{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
});
        readline.question(`\n Presione ${'ENTER'.green} para continuar \n`, ()=>{
        readline.close();
    
        resolve();
});
    
});
};


module.exports ={ 
    mostrarMenu,
    pausa


}