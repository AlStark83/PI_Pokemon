const axios = require('axios');
const { Pokemon, Type } = require('../db')

const createPokemonController = async (req, res) => {



    
    res.send('NIY: Esta ruta crea un pokemon nuevo(desde createPokemon.js)')
};

module.exports = { createPokemonController };