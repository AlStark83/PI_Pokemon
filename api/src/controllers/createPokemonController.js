const axios = require('axios');
const { Pokemons, Type } = require('../db')


const createPokemonController = async ({name, hp, attack, defense, speed, height, weight, img, types}) => {
           
    if(!name || !hp || !attack || !defense || !speed || !height || !weight || !img || !types){
        throw Error("Sending incomplete information!");
    }else{
        const pokemonCreated = await Pokemons.create({
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            img,
            types,
            createdInDb: true
        })
        let typeDb = await Type.findAll({
            where: { name: types}
        })
        await pokemonCreated.addType(typeDb);
    }
}

module.exports = { createPokemonController };