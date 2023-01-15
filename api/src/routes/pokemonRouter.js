const { Router } = require('express')
const { createPokemonController } = require('../controllers/createPokemonController.js')
const { getAllPokemonsController } = require('../controllers/getAllPokemonsController.js')
const { getPokemonController } = require('../controllers/getPokemonController.js')

const pokemonRouter = Router();

pokemonRouter
.get('/', getAllPokemonsController)
.get('/', getPokemonController)
.post('/', createPokemonController);


module.exports = pokemonRouter;