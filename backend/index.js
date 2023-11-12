import express from 'express';
const app = express()
const port = 5000
import mongoDB from "./db.js";


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})