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
                name:  apiPokeApiURL.name !== undefined? apiPokeApiURL.name : 'Info not found',
                id: apiPokeApiURL.id !== undefined? apiPokeApiURL.id : 'ID not found',
                hp: apiPokeApiURL.stats[0].base_stat !== undefined? apiPokeApiURL.stats[0].base_stat : 'HP not found',
                attack: apiPokeApiURL.stats[1].base_stat !== undefined? apiPokeApiURL.stats[1].base_stat : 'Attack not found',
                defense: apiPokeApiURL.stats[2].base_stat !== undefined? apiPokeApiURL.stats[2].base_stat : 'Defense not found',
                specialAttack: apiPokeApiURL.stats[3].base_stat !== undefined? apiPokeApiURL.stats[3].base_stat : 'Special Attack not found',
                specialDefense: apiPokeApiURL.stats[4].base_stat !== undefined? apiPokeApiURL.stats[4].base_stat : 'Special Defense not found',
                speed: apiPokeApiURL.stats[5].base_stat !== undefined? apiPokeApiURL.stats[5].base_stat : 'Speed not found',
                height: apiPokeApiURL.height !== undefined? apiPokeApiURL.height : 'Height not found',
                weight: apiPokeApiURL.weight !== undefined? apiPokeApiURL.weight : 'Weight not found',
                img: apiPokeApiURL.sprites.other["dream_world"].front_default !== undefined? apiPokeApiURL.sprites.other["dream_world"].front_default : 'https://i.ytimg.com/vi/MjyjMDkmWIk/maxresdefault.jpg',
                type: apiPokeApiURL.types.map(e => e.type.name) !== undefined? apiPokeApiURL.types.map(e => e.type.name) : 'Type not found' 
            };

            coleccion.push(apiInfo);

            id++;
        }
       
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