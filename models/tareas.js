const Tarea = require('./tarea')
require('colors')
//creamos una clase de arreglo de tareas
class Tareas {
    //no es relevante pero queda mejor al leer el codigo
    _listado = {};

    get listadoArreglo(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
           const tarea = this._listado[key];
            listado.push(tarea)
        })

        return listado;
    }
        constructor(){
            this._listado = {};

        }

        borrarTarea(id = ''){
            if(this._listado[id]){
                delete this._listado[id]
            }
        }
        cargarTareasFromArray( tareas = [] ) {
            tareas.forEach( tarea => {
                this._listado[tarea.id] = tarea;
            });
        }
    
    
        crearTarea( desc = '' ) {
    
            const tarea = new Tarea(desc);
            this._listado[tarea.id] = tarea;
        }

        listadoCompleto(){
            this.listadoArreglo.forEach((tarea , indice) =>{
                const idx = `${indice +1}`.green;
                const {desc, completadoEn} = tarea;
                const estado = (completadoEn)
                            ? 'Completada'.green
                            :'Pendiente.'.red             
                            
                            
            console.log(`${idx} ${desc}::${estado}`);
            });



        }

        listarPendientesCompletadas(completadas){
            console.log();
            let contador = 0;
            this.listadoArreglo.forEach(tarea  =>{

                const {desc, completadoEn} = tarea;

                const estado = (completadoEn)
                            ? 'Completada'.green
                            :'Pendiente.'.red
                if(completadas){        
                    //mostrar completadas
                if (completadoEn){
                        contador++;
                        console.log(`${(contador+ '.').toString().green } ${desc} :: ${completadoEn.green}`);   
                        }
                }else{
                    //mostrar pendientes
                    if(!completadoEn){        
                        contador++;
                       console.log(`${(contador+ '.').toString().green } ${desc}::${estado}`);
                        }
                
                 }
        });
}
            toggleCompletadas (ids = []){
                ids.forEach(id =>{
                const tarea = this._listado[id];

                    if(!tarea.completadoEn){
                        tarea.completadoEn =  new Date().toISOString();
                    }                   
                }) ;
                this.listadoArreglo.forEach(tarea => {
                    if (!ids.includes(tarea.id)){
                         this._listado[tarea.id].completadoEn = null;
                    }

                })
        

}
}
module.exports = Tareas