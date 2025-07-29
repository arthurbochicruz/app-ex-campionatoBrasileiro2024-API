import tabela from "./tabela.js"; 
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send(tabela) 

}) 

app.listen(7000, () => 
    console.log("Servidor rodando com sucesso na porta http://localhost:7000")
)
