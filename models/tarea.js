
 const {v4: uuidv4} = require('uuid');
//definimos la clase de tarea y lo que seria su interface
 class Tarea {
    //el id sera automaticamente generado pr uuid
    id = '';
    //descricion ingresada por el usuario
    desc = '';
    completadoEn = null;
    //ejecutamos el cosntructor cada vez que se genere una nueva tarea
    constructor(desc){
        //genera automaticamente un id unico
        this.id = uuidv4();
        //igualamos la descripcion
        this.desc = desc;
        this.completadoEn = null;
    }
    
    
}


module.exports = Tarea;