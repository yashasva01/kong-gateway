const express = require('express')
const features = require("./routes/router.js")
require('dotenv').config()

const app = express()
const port = process.env.PORT
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/features', features);

app.listen(port, () => {
  console.log(`Service 1 listening on port ${port}`)
})