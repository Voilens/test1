import express from 'express'

const PORT = 9000;

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json('Сервер работает12!')  
})


app.listen(PORT, () => console.log('сервер запущен' + PORT))