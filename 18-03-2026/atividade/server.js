const express = require('express')
const app = express()
const port = 3000
app.use(express.json())


app.get('/', (req, res) => {
  res.send('ebaaaa')
})




app.listen(port, () => {
  console.log(`isso ta rodando numa http://localhost3000  ${port}`)
})