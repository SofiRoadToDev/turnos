
import express,{Request,Response}from 'express';
import { myDataSource } from './dbconfig/dbconfig';


myDataSource.initialize()
    .then(()=>console.log('Conexion exitosa a base de datos'))
    .catch((err)=>console.error('Ocurrio un error al conectar a base de datos: ',err.message))

const app=express();

app.use(express.json())

app.get('/',(req:Request,res:Response)=>{
    res.json("Holis a todos estoy andando con express")
})




app.listen(8000,()=>console.log('Quien osa despertarme de mi eterno descanso'));


