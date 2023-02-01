const axios = require('axios');
const { Pokemons, Type } = require('../db')
const { Router } = require('express')


const getAllTypes = async (req, res) => {

const typesApi =  (await axios.get('https://pokeapi.co/api/v2/type',{headers: {'Accept-Encoding': 'gzip,deflate,compress'}})).data;
const types = typesApi.results.map((e) => e.name);
console.log(types);
types.forEach(e => {
    Type.findOrCreate({
        where: { name: e}
    })
});
const allTypes = await Type.findAll();
res.send(allTypes.map(e=> e.name));
}

module.exports = {getAllTypes};