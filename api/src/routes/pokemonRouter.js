const { Router } = require('express')
const axios = require('axios')
const { createPokemonController } = require('../controllers/createPokemonController')
const { getAllPokemonsController } = require('../controllers/getAllPokemonsController')
const { getPokemonController } = require('../controllers/getPokemonController')

const pokemonRouter = Router();

pokemonRouter
.get('/', getAllPokemonsController)
.get('/:id', getPokemonController)
.post('/', async (req, res) =>{
    try {
        const pokemonCreated = await createPokemonController(req.body);
        res.status(200).send(pokemonCreated);
    } catch(error){
        res.status(400).send({error: error.message})
    }
});


module.exports = pokemonRouter;