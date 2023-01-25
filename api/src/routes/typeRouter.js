const { Router } = require('express')
const {getAllTypes} = require('../controllers/getAllTypes')
const typeRouter = Router();

typeRouter
.get('/', getAllTypes)

module.exports = typeRouter;