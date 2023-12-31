require('dotenv').config()

const express = require('express')
const app = express()
const articles = [{title: 'Example 1'}, {title: 'Example 2'}, {title: 'Example 3'}] // пока что имитация базы данных. В данном массиве будут храниться статьи ввиде объектов
const bodyParser = require('body-parser')

app.set('port', process.env.PORT || 3001) // port

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true} ))

app.get('/articles', (req, res, next) => {
    res.send(articles)
})

app.post('/articles', (req, res, next) => {
    const article = { title: req.body.title }
    res.send('ok')
})

app.get('/articles/:id', (req, res, next) => {
    const id = req.params.id
    console.log('Fetching: ', id)
    res.send(articles[id])
})

app.delete('/articles/:id', (req, res, next) => {
    const id = req.params.id
    console.log('Deleting: ', id)
    delete articles[id]
    res.send({ message: 'Deleted' })
})

app.listen(app.get('port'), () => {
    console.log(`Web app available at http://127.0.0.1:${app.get('port')}`)
})

module.exports = app

/*
маршруты приложения со статьями 
POST/articles
GET/articles/:id
GET/articles
DELETE/articles/:id
*/