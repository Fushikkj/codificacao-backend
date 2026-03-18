const express = require('express')
const app = express()
const port = 3000

let frutas = [
    { id: 1, fruta: "banana" },
    { id: 2, fruta: "maça"},
    { id: 3, fruta: "abacaxi" }

]


    app.get('/frutas/:id', (req,res) =>{
   const id = parseInt(req.params.id)
   const frutas = frutas.find(f => f.id === id) 
    if (!frutas) {
       return res.status(404).json({
         sucess: false,
        message: 'essa fruta n existe fi'
       })
    }

        res.json({
          sucess: true,
          data: frutas
        })
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
