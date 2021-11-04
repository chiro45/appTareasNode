const Tarea = require('./tarea')
require('colors')
//creamos una clase de arreglo de tareas
class Tareas {
    //no es relevante pero queda mejor al leer el codigo
    _listado = {};
    //enlaza la propiedad de un objeto con una funcion que sera llamada cuando la propiedad es buscada
    //esta propiedad lista el objeto en un array
    get listadoArreglo(){
        //declaramos la constante listado
        const listado = [];
        //extrae todas las keys del objeto _listado y recorre todo
        Object.keys(this._listado).forEach(key => {
            //igualamos tarea a el listado[key]
           const tarea = this._listado[key];
           //le metemos a listado[] => las keys de ._listado
            listado.push(tarea)
        })

        return listado;
    }
        //inicializamos el contructor para instanciar e objeto
        constructor(){
            this._listado = {};

        }
        //borrar tarea recibe como parametro un id en  string
        borrarTarea(id = ''){
            //si existe el id => entonces elimina esta tarea
            if(this._listado[id]){
                delete this._listado[id]
            }
        }
        //recibe como parametros el arrray de tareas
        cargarTareasFromArray( tareas = [] ) {
            tareas.forEach( tarea => {
                this._listado[tarea.id] = tarea;
            });
        }
    
        //metodo para crear las tareas
        crearTarea( desc = '' ) {
            //tarea es igual a una nueva tarea, con su descripcion
            const tarea = new Tarea(desc);
            //le decimos que el id se va a asignar a tarea
            this._listado[tarea.id] = tarea;
        }
        //metodo para mostrar el listado de tareas
        listadoCompleto(){
            //recorremos el arreglo y extraemos tarea e indice
            this.listadoArreglo.forEach((tarea , indice) =>{
                //generamos el indice para verlo correctamente
                const idx = `${indice +1}`.green;
                //desestructuramos descripcion y el completadoEn desde tarea
                const {desc, completadoEn} = tarea;
                //le decimos que si completado existe muestre lo siguiente
                const estado = (completadoEn)
                            ? 'Completada'.green
                            :'Pendiente.'.red             
                //retorna el indice descripcion y estado                            
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
            //esta funcion nos deja introducir la fecha en la que fue completada
            toggleCompletadas (ids = []){
                //recibe un array de ids
                ids.forEach(id =>{
                //igualarmos tarea a el id de cada elemento del ._listado
                const tarea = this._listado[id];
                    //decimos que si completado no existe
                    if(!tarea.completadoEn){
                        //introduzca el completado y la fecha como string => Una cadena que representa la fecha dada en el formato ISO 8601 según la hora universal.
                        tarea.completadoEn =  new Date().toISOString();
                    }                   
                }) ;
                // le decimos que recorra listado y nos muestre todas las tareas
                //mientras ids, no incluya el tarea.id
                this.listadoArreglo.forEach(tarea => {
                    if (!ids.includes(tarea.id)){
                        //en ese caso el completadoEn se define a null
                         this._listado[tarea.id].completadoEn = null;
                    }

                })
        

}
}
module.exports = Tareas