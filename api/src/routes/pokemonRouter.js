const { Router } = require('express')
const axios = require('axios')
const { createPokemonController } = require('../controllers/createPokemonController')
const { getAllPokemonsController } = require('../controllers/getAllPokemonsController')
const { getPokemonController } = require('../controllers/getPokemonController')

const pokemonRouter = Router();

pokemonRouter
.get('/', getAllPokemonsController)
// .get('/:id', /*getPokemonController*/(req,res)=>{
//     res.send('Hola con ID desde pokemonRouter')
// })
// .post('/', createPokemonController);


module.exports = pokemonRouter;