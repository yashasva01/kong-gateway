const express = require('express')
const feature = require('./routes/router.js')
const app = express()
require('dotenv').config()


const port = process.env.PORT
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/features', feature);

app.listen(port, () => {
  console.log(`Service 2 listening on port ${port}`)
})