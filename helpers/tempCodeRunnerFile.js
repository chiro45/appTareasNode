
const inquiererMenu = async ()=>{
       
    // console.clear();
    console.log('= = = = = = = = = = = = ='.green);
    console.log('= '.green+'Seleccione una opcion'.white+' ='.green);
    console.log('= = = = = = = = = = = = = \n'.green);    
    //
    const {opcion} = await inquirer.prompt(preguntas)
    
    return opcion;

  
}