require('dotenv').config()
const express = require ('express')
const app = express()
const ejs = require('ejs');

app.use(express.static(__dirname + '/public'));

const pokemon = require('./models/pokemon.js')


app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemons: pokemon
    })
})

app.get('/', (req, res) => {
    res.send(pokemon)
})

//giving this route a different page for clarity 

app.get('/pokemon_page/:id/', (req, res) => {
    let id = req.params.id; 
    for (item of pokemon) {
        pokemon_name = pokemon[id].name; 
        pokemon_img = pokemon[id].img
        pokemon_img_url = pokemon_img + ".jpg"
    }
    res.render('show.ejs', {
         indivPokemon: pokemon[id]
    }
    )
   
})



app.listen(process.env.PORT, ()=>{
    console.log('I am listening on port 3000');
});
