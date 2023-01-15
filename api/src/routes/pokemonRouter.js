const { Router } = require('express')
const { createPokemonController } = require('../controllers/createPokemonController')
const { getAllPokemonsController } = require('../controllers/getAllPokemonsController')
const { getPokemonController } = require('../controllers/getPokemonController')

const pokemonRouter = Router();

pokemonRouter
.get('/', /*getAllPokemonsController*/(req,res)=>{
    res.send('Hola desde pokemonRouter')
})
.get('/:id', /*getPokemonController*/(req,res)=>{
    res.send('Hola con ID desde pokemonRouter')
})
// .post('/', createPokemonController);


module.exports = pokemonRouter;