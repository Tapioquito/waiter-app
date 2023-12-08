import express from 'express';
const app = express();

const port = 3001;

app.listen(3001, ()=>{
    console.log(`Estamos no Brasiiiiil. Rodando na porta ${port}`);
});
