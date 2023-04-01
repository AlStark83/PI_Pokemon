const axios = require('axios');
const { Pokemons, Type } = require('../db')
const { Router } = require('express')


const loadingAllPokemons = async () => { 
        const coleccion = [];
        let id = 1
        while (id < 152){   
            apiPokeApiURL = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`,{headers: {'Accept-Encoding': 'gzip,deflate,compress'}})).data;
            
            apiInfo = {
                name:  apiPokeApiURL.name !== undefined? apiPokeApiURL.name : 'Info not found',
                id: apiPokeApiURL.id !== undefined? apiPokeApiURL.id : 'ID not found',
                hp: apiPokeApiURL.stats[0].base_stat !== undefined? apiPokeApiURL.stats[0].base_stat : 'HP not found',
                attack: apiPokeApiURL.stats[1].base_stat !== undefined? apiPokeApiURL.stats[1].base_stat : 'Attack not found',
                defense: apiPokeApiURL.stats[2].base_stat !== undefined? apiPokeApiURL.stats[2].base_stat : 'Defense not found',
                speed: apiPokeApiURL.stats[5].base_stat !== undefined? apiPokeApiURL.stats[5].base_stat : 'Speed not found',
                height: apiPokeApiURL.height !== undefined? apiPokeApiURL.height : 'Height not found',
                weight: apiPokeApiURL.weight !== undefined? apiPokeApiURL.weight : 'Weight not found',
                img: apiPokeApiURL.sprites.other["home"].front_default !== undefined? apiPokeApiURL.sprites.other["home"].front_default : 'https://i.ytimg.com/vi/MjyjMDkmWIk/maxresdefault.jpg',
                types: apiPokeApiURL.types.map(e => e.type) !== undefined? apiPokeApiURL.types.map(e => e.type) : 'Type not found' 
            };
            
            coleccion.push(apiInfo);
            
            id++;
        }
       
        const infoDB = await Pokemons.findAll({
            attributes: ["name","id", "hp", "attack", "defense","speed","height", "weight","img", "createdInDb"],
            include:{
            model:Type,
            attributes: ["name"],
            through: {attributes:[]},
            },
        })
        // infoDB.forEach(e => {
        //     let newArr = e.dataValues.types.map(element => element.name)
        //     e.dataValues.types = newArr.join(" ");
        // }) 
        
        const allInfo = infoDB? [...infoDB, ...coleccion] : [...coleccion];
        console.log(coleccion.length);
        return allInfo
    }
    
    const getAllPokemonsController = async(req,res) => {
    
        try{ 
        const name = req.query.name;
        let allData = await loadingAllPokemons();
        if(name){
            let pokemonName = allData.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            pokemonName.length ?
            res.status(200).send(pokemonName) :
            res.status(404).send('Pokemon no encontrado');
        } else {
            res.status(200).send(allData)
        }
    }catch(error){
        console.log(error);        
    }
}

module.exports = { getAllPokemonsController };