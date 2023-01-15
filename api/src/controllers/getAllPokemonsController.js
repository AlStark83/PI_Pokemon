const { Router } = require ('express');
const axios  = require ('axios')

const router = Router();

const getAllPokemonsController = async (req, res) => {
    // try {
    //     const apiInfo= [];
    //     for (let index = 1; index < 41; index++) {
            const apiUrl = await axios.all(`https://pokeapi.co/api/v2/pokemon/${index}`, {header: {"Accept-Encoding": "gzip,deflate,compress"}})
    //         apiInfo.push(apiUrl.data.results.map(el => {
    //             return{
    //                 id: index,
    //                 name: el.forms.name,
    //                 hp: el.stats[0].base_stat !== undefined? el.stats[0].base_stat: 'Not Found',
    //                 attack: el.stats[1].base_stat !== undefined? el.stats[1].base_stat: 'Not Found',
    //                 defense: el.stats[2].base_stat !== undefined? el.stats[2].base_stat: 'Not Found',
    //                 speed: el.stats[5].base_stat !== undefined? el.stats[5].base_stat: 'Not Found',
    //                 height: el.height !== undefined? el.height: 'Not Found',
    //                 weight: el.weight !== undefined? el.weight: 'Not Found',
    //                 image: el.sprites.other.dream_world.front_default !== undefined? el.sprites.other.dream_world.front_default: 'https://www.andrewsaladino.com/wp-content/uploads/whos-that-pokemon-pikachu.png',
    //                 createdInDB: false
    //             }
    //         }))
    //     }
        

    //     getDbInfo = await Pokemon.findAll({
    //         include:{
    //             model: Type,
    //             attributes: ['name'],
    //             through:{attributes: []},
    //         },
    //     })
        

    //     const allInfo = getDBInfo? [...getDBInfo, ...apiInfo] : [...apiInfo];
    //     res.send(allInfo)
    // }catch(error){
    //     res.send(error);
    // }
    res.send('Hola')
};


module.exports = { getAllPokemonsController };
