const express= require('express');
const cors= require('cors');
const bodyParser= require('body-parser')


const app = express();

//Middlewares


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.get("/api", (req, res) => res.status(200).send({
  message: "Hola desde el servidor!"
  }))

  app.get("/api/result", (req,res)=>{
    res.json({"userName": ["Hulk","Thor","Capitán América", "Iron Man", "Black Widow", "Hawk Eye"],
    "role":["Team Leader","Team Member"],
    })
  });

    
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`)
  });



  
// //Autenticación con la base de datos de tareas
// dbConnection.authenticate()
// .then( () => console.log('DB Connected'))
// .catch( error => console.log(error));