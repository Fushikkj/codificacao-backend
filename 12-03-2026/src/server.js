const express = require('express')
const app = express()
const port = 3000

let alunos = [
    { id: 1,nome: "Édio", idade: 35 },
    { id: 2,nome: "vanessa", idade: 52 },
    { id: 3,nome: "daniel", idade: 16 }

]



app.get('/', (req, res) => {
  res.send('vanessa schuster')
})

/*app.get('/alunos/getAll', (req, res) => {
   res.json({
    sucess: true,
    data: alunos
   })
}) */

   //GET buscar aluno byID
    app.get('alunos/:id', (req,res) =>{
      const id = parseInt(req.params.id)
      const aluno = alunos.find(a => a.id === id)
        if (!aluno) {
          return res.status(404).json({
            sucess: false,
            message: 'aluno não encontrado'
          })
        }

        res.json({
          sucess: true,
          data: aluno
        })
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//post - criar um novo aluno

app.post('/alunos', (req, res) => {
const { nome, idade } = req.body
 
  if (!nome || !idade){
    return res.status(400).json({
      sucess: false,
      message: 'nome e idade são obrigatórias'
    })
  }

  const novoAluno = {
    id: alunos.leght + 1,
    nome,
    idade
  }

  aluno.push(novoAluno)

  res.status(201).json({
    sucess: true,
    data: novoAluno,
    message: 'certo'
  })

})