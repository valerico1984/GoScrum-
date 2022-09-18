// const Task = require('../models/Task')

// //configuración de tareas:

// //Añadir nueva tarea

// const saveTask= async (req,res, next) =>{

//     try{

//         await Task.create(req.body);
//         res.json({message:'Succesfully added'});
//      }
//      //gestión del error:
//      catch (error){
//          console.log(error);
//          next();
//      }

// }

// //Obtener tareas existentes:

// const getTasks = async (req,res, next) =>{

//     try{
//         const tasks = await Tasks.findAll();
//         res.json(tasks);
//      }

//      //gestión del error:
//      catch (error){
//          console.log(error);
//          next();
//      }

// }

// //Obtener una tarea por ID
// const getTask = async (req,res, next) =>{

//     try{
//         const task = await Task.findByPk(req.params.id);
//         res.json(task);
//      }

//     //gestión del error:
//      catch (error){
//          console.log(error);
//          next();
//      }

// }

// //Editar tarea existente
// const editTask = async (req,res, next) =>{

//     try{
//         const {concept, amount, type_opr} = req.body;
//         await Operation.update(
//             {concept,
//             amount, 
//             type_opr}, 
//             {where:
//             {id: req.params.id}});

//         const task = await Task.findByPk(req.params.id);       
//         res.json(task);
//      }

//     //gestión del error:
//      catch (error){
//          console.log(error);
//          next();
//      }
//     }

// //Eliminar tarea
// const deleteTask = async (req,res, next) =>{

//         try{
            
//             await Task.destroy(
//                 {where:
//                 {id: req.params.id}});
        
//             res.json({message: "Task deleted succesfully"});
//          }
         
//          //gestión del error:
//          catch (error){
//              console.log(error);
//              next();
//          }

// }

// module.exports={saveTask,getTask,getTasks, editTask, deleteTask}