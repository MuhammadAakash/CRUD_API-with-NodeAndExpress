const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const Userroutes = require('./routes/users')

app.use(bodyParser.json())

app.use("/users", Userroutes)

app.get('/', (req, res) => {
    res.send('This is a home Page of the Website')
  })

app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`)
})