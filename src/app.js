import express from "express"
import employeesRoutes from "./route/employees.routes.js";
import indexRoutes from "./route/index.routes.js"

const app = express()
app.use(express.json()) //interpreta toda info que llega por request en formato json

app.use('/api', employeesRoutes) //le agrego el prefijo "/api" para todos los verbos de employees 
app.use(indexRoutes)

app.use((req, res, nex)=>{      //middleware para manejar el error
    res.status(404).json({
        mensaje:"endpoint no encontrado"
    })
})

export default app;