
require('colors')
const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
const { inquiererMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');





const main =async()=>{
let opcion = "";

const tareas = new Tareas();

const tareasDb = leerDb();

if(tareasDb){//cargar tareas
  tareas.cargarTareasFromArray(tareasDb)
}


do{
  // le decimos que espere el menu con las opciones
    opcion = await inquiererMenu();
    //en el caso de que sea 1 vas a crear una tarea nueva
    switch (opcion) {
      case '1':
        //le decimos que espere el leer Input y este pide el mensaje
        const desc = await leerInput('Descripcion: ');
        //creamos la tarea
         tareas.crearTarea(desc);
        
        break;
        //en el caso de que sea 2 vas a mostrar las tareas ingresadas
      case '2':
        tareas.listadoCompleto();
        break;
      case '3':
        tareas.listarPendientesCompletadas(true);
      break;    
      case '4':
        tareas.listarPendientesCompletadas(false);
      break;
      case '5':
        const ids = await mostrarListadoCheckList(tareas.listadoArreglo)
        tareas.toggleCompletadas(ids)
      break;
      case '6':
      const id = await listadoTareasBorrar(tareas.listadoArreglo);
      
      if (id != '0'){
        const ok = await confirmar('Estas seguro de eliminar');
        if (ok ){
          tareas.borrarTarea(id)
          console.log('la tarea fue borrada correctamente!')
        }
      }
      break;

        default:
        break;
    }   
   guardarDb(tareas.listadoArreglo)
    //realizamos la valdaion y le decimos que si es diferente de 0 pause para proseguir
  if(opcion !== '0')await pausa();
  
  //realizamos la condicion de salida
}while(opcion !== '0')
console.clear()
}

main();

