const axios = require('axios');
const { Pokemons, Type } = require('../db.js')


const getPokemonController = async(req, res) => {
    const { id } = req.params;
    function uuidValidation (item)
    {
      let regexUuid = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
      return item.match(regexUuid)?true:false
    }
    if (
     uuidValidation(id)
    ){
        try{
            let pokemonDb = await Pokemons.findByPk(
            
                  id,            
                  {include: [
                    {model: Type, attributes: ["name"],   through: {attributes: []}}
            ],}
            )
              res.send(pokemonDb);
        
    } catch(error){
        console.log(error, 'error en Pokemon por ID de Base de Datos')     
    }
} else {
    try{
        
        apiPokeApiURL = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`,{headers: {'Accept-Encoding': 'gzip,deflate,compress'}})).data;
                
                apiInfo = {
                    name:  apiPokeApiURL.name !== undefined? apiPokeApiURL.name : 'Info not found',
                    id: apiPokeApiURL.id !== undefined? apiPokeApiURL.id : 'ID not found',
                    hp: apiPokeApiURL.stats[0].base_stat !== undefined? apiPokeApiURL.stats[0].base_stat : 'HP not found',
                    attack: apiPokeApiURL.stats[1].base_stat !== undefined? apiPokeApiURL.stats[1].base_stat : 'Attack not found',
                    defense: apiPokeApiURL.stats[2].base_stat !== undefined? apiPokeApiURL.stats[2].base_stat : 'Defense not found',
                    // specialAttack: apiPokeApiURL.stats[3].base_stat !== undefined? apiPokeApiURL.stats[3].base_stat : 'Special Attack not found',
                    // specialDefense: apiPokeApiURL.stats[4].base_stat !== undefined? apiPokeApiURL.stats[4].base_stat : 'Special Defense not found',
                    speed: apiPokeApiURL.stats[5].base_stat !== undefined? apiPokeApiURL.stats[5].base_stat : 'Speed not found',
                    height: apiPokeApiURL.height !== undefined? apiPokeApiURL.height : 'Height not found',
                    weight: apiPokeApiURL.weight !== undefined? apiPokeApiURL.weight : 'Weight not found',
                    img: apiPokeApiURL.sprites.other["dream_world"].front_default !== undefined? apiPokeApiURL.sprites.other["dream_world"].front_default : 'https://i.ytimg.com/vi/MjyjMDkmWIk/maxresdefault.jpg',
                    type: apiPokeApiURL.types.map(e => e.type.name) !== undefined? apiPokeApiURL.types.map(e => e.type.name) : 'Type not found' 
                }
                res.send(apiInfo);
    }catch(error){
        console.log(error, 'Error en datos de pokemon traidos desde la API');
        
    }
    }


}
module.exports =  { getPokemonController } ;