
const express = require('express');
const app = express();
const PORT = process.env.port
const jwt = require("jsonwebtoken");
require("dotenv").config();
const KEY = process.env.SECRET_KEY

const listadetareas = require("./data")
const listviewrouter = require("./list-view-router")
const listeditrouter = require("./list-edit-router")

app.use("/list-view-router", listviewrouter);
app.use("/list-edit-router", listeditrouter);
app.use(express.json());

const users = [
  { email: 'jesus@gmail.com', password: '123458' , rol: "admin" },
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
  
  const token = jwt.sign({ userId: user.id, username: user.username }, process.env.SECRET_KEY, { algorithm: 'HS256' });
  res.json({ token });
});

app.get('/protegida', (req, res) => {
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

app.use('/editartareas', listeditrouter, () =>{
  console.log("estas editando la lista de tareas")
});

app.use('/vertareas', listviewrouter, () => {
  res.json(listadetareas)
  console.log("estas viendo la lista de tareas")
})

app.listen(PORT, () => {console.log(`Servidor Express funcionando en http://localhost:${PORT}`);});
