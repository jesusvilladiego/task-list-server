const express = require('express');
const app = express();
const PORT = 3000;
const jwt = require("jsonwebtoken");
require("dotenv").config();
const KEY = process.env.SECRET_KEY

const listadetareas = require("./data.js")
const listviewrouter = require("./list-view-router")
const listeditrouter = require("./list-edit-router")

app.use(express.json());

const users = [
  { email: 'jesusvilladiego@gmail.com', password: '123458' , rol: "admin" },
  { email: 'david@gmail.com', password: '95353235', rol: "usuario"}
];

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email == email && user.password == password);

  if (user) {
    const token = jwt.sign(user, KEY);
    res.status(200).json({ token });
  }else{
    res.status(401).json({ message: 'correo o contraseña incorrecta' });
  }
});

app.get('/protected', (req, res) => {
  const token = req.headers.authorization;


  jwt.verify(token, KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({ error });
    }

    if (decoded.rol == "admin") {
      return res.status(200).json({users})
    } else {
      return res.status(4001).json({message: "No tienes acceso a esta ruta"})
    }
  });
});

app.get("/this-should-exists", (req, res)=>{
  res.status(404).send("Not found")
});

app.get('/', (req, res) => {
  res.json(listadetareas);
});

app.use('/editar', listeditrouter, () =>{
  console.log("estas editando la lista de tareas")
});

app.use('/ver', listviewrouter, () => {
  res.json(listadetareas)
  console.log("estas viendo la lista de tareas")
})

app.listen(PORT, () => {console.log(`Servidor Express funcionando en http://localhost:${PORT}`);});
