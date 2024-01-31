const express = require('express')
const app = express()
app.use(express.json())

const librosRouter = require('./routes/libros')

const errorHandler = require('./middlewares/errorHandler')

const PORT = 3000

app.use("/libros", librosRouter)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en le puerto ${PORT}`);
})