import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017')
    .then(()=>{
        const app = express();
        const port = 3001;

        app.listen(port, ()=>{
            console.log(`Estamos no Brasiiiiil. Rodando na porta ${port}`);
        });

        console.log('Conectado ao MongoDB');
    }).catch(()=>console.log('erro ao conectar ao mongoDB'));
