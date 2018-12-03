const   express = require('express'),
        bodyParser = require('body-parser'),
        app = express();
        data = require('./nesgames.json')
        favorites = [];

app.use(bodyParser.json())


app.get('/api/games', (req, res) => {
    res.send(data)
})

app.post('/api/games', (req, res) => {
    console.log('req.body', req.body)
    favorites.push(req.body)
    res.status(200).send(favorites)
})

app.delete('/api/games/:id', (req, res) => {
    const { id } = req.params
    newFavorites = favorites.filter(e => {
        e.id !== id
    })
    res.status(200).send(newFavorites)
})

PORT = 4000
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})