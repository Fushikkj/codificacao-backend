const express = require('express')
const app = express()
const port = 3000

let alunos = [
    { id: 1,nome: "Édio", idade: 35 },
    { id: 2,nome: "vanessa", idade:17 },
    { id: 3,nome: "daniel", idade:16 }

]


let frutas = [
    { id: 4, nome: "banana", maduro: não },
    { id: 5, nome: "maça", maduro: sim },
    { id: 6, nome: "goiaba", maduro: sim }

]

app.get('/frutas/getAll', (req, res) => {
   res.json({
    sucess: true,
    data: frutas
   })
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/alunos/getAll', (req, res) => {
   res.json({
    sucess: true,
    data: alunos
   })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
