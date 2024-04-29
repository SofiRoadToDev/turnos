import { DataSource } from "typeorm";

export const myDataSource=new DataSource({
    type:"mysql",
    port:3306,
    username:"sofi",
    password:"sofi",
    database:"turnos",
    entities:["src/entities/*.ts"],
    logging:true,
    synchronize:true
})