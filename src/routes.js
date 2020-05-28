const {Router} = require('express')
const route = Router()
const ClienteController = require('./controllers/ClienteController')

route.get('/', ClienteController.home)
route.get('/cliente', ClienteController.index)
route.post('/cliente', ClienteController.create)
route.put('/cliente/:_id', ClienteController.change)
route.delete('/cliente/:_id', ClienteController.delete)
route.post('/cliente/login', ClienteController.login)

module.exports = route
