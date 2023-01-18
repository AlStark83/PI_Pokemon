const axios = require('axios');
const { Pokemon, Type } = require('../db')
const { Router } = require('express')


const getAllPokemonsController = async(req,res) => {
    try{
        const coleccion = [];
        let id = 1
        while (id < 41){   
            apiPokeApiURL = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`,{headers: {'Accept-Encoding': 'gzip,deflate,compress'}})).data;
            
            apiInfo = {
                name: apiPokeApiURL.name,
                id:apiPokeApiURL.id,
                hp: apiPokeApiURL.stats[0].base_stat,
                attack: apiPokeApiURL.stats[1].base_stat,
                defense: apiPokeApiURL.stats[2].base_stat,
                speedattack: apiPokeApiURL.stats[3].base_stat,
                speedefense: apiPokeApiURL.stats[4].base_stat,
                speed: apiPokeApiURL.stats[5].base_stat,
                height: apiPokeApiURL.height,
                weight: apiPokeApiURL.weight,
                img: apiPokeApiURL.sprites.other["official-artwork"].front_default,
            };

            coleccion.push(apiInfo);

            id++;
        }
        console.log(apiPokeApiURL.id);



        infoDB = await Pokemon.findAll({
            include:{
                model:Type,
                attributes: ['name'],
                through: {attributes:[]},
            },
        })

        const allInfo = infoDB? [...infoDB, ...coleccion] : [...coleccion];
        console.log(coleccion);
        

        res.send(allInfo);
    }catch(error){
        console.log(error);        
    }
}

module.exports = { getAllPokemonsController };