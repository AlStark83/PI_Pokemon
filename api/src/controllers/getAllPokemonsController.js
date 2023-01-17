const axios = require('axios');
const { Pokemon, Type } = require('../db')
const { Router } = require('express')


const getAllPokemonsController = async(req,res) => {
    try{
        const coleccion = [];
        apiPokeApiURL = (await axios.get('https://pokeapi.co/api/v2/pokemon',{headers: {'Accept-Encoding': 'gzip,deflate,compress'}})).data;
        apiInfo = coleccion.push(apiPokeApiURL.results.map((e) => 
            {
            return{
                name: e.name
            }
        }
        ));
        console.log(apiInfo);
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