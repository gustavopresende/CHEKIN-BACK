import express from "express";
import db from "./config/dbConnect.js";
import router from "./routes/index.js";


db.on('error',console.log.bind(console, 'erro de conexão'));
db.once('open',()=>{
    console.log('conexão feita com sucesso')
})

const app=express();

app.use(express.json());

router(app);

export default app;