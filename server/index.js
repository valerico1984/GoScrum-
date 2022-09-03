const express = require("express");
const cors= require('cors');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.get("/auth", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
  });

  app.get("/auth/data", (req,res)=>{
    res.json({"status_code":200,"message":"OK","result":{"continente":["America","Europa","Otro"],"region":["Otro","Latam","Brasil","America del Norte"],"Rol":["Team Member","Team Leader"]}})
  });

  app.post("/auth/register", (req,res)=>{
    async (req,res, next) =>{

        try{
    
            await Operation.create(req.body);
            res.json({message:'Succesfully added'});
         }
         //gestión del error:
         catch (error){
             console.log(error);
             next();
         }
    
    }
 
  });


  
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`)
  });
