const express = require('express') //importacion de express
require('dotenv').config()
const cors = require('cors')
const {dbConnection} = require('./database/config')

//Crear servidor de express
const app = express()

//Base de Datos
dbConnection()

//CORS
app.use(cors())

//directorio publico
app.use(express.static('public')) //funcion que se ejecuta cuando alguien hace una peticion a mi servidor

//lectura y parseo del body
app.use(express.json())

// rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

//todo crud: eventos


//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${process.env.PORT}`)
})