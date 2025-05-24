const axios = require('axios')
const express = require ('express')
const app = express()
app.use(express.json())

const eventos = []

//armazenar todos os eventos aqui
app.post('/eventos', async (req, res) => {
  const evento = req.body
  console.log(evento)
  eventos.push(evento)
  try{
    await axios.post('http://localhost:4000/eventos', evento)
  }
  catch(e){
    console.log(e)
  }
  try {
    await axios.post('http://localhost:5000/eventos', evento)
  } catch (e) {
    console.log(e)
  }
  try{
    await axios.post('http://localhost:6000/eventos', evento)
  }
  catch(e){
    console.log(e)
  }
  try{
    await axios.post('http://localhost:7000/eventos', evento)
  }
  catch(e){
    console.log(e)
  }
  res.end()
})

//definir um endpoint que viabilize a obtenção da coleção de eventos
app.get('/eventos', (req, res) => {
  res.json(eventos)
})

const port = 10000
app.listen(port, () => {
  console.log(`Barramento. Porta ${port}.`)
})
