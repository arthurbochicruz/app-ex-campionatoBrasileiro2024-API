import tabela from "./tabela.js"; 
import express from 'express'
import { modeloTime, modeloAtualizaçaoTime } from "./validacao.js";

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send(tabela) 

}) 

app.get('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase()
    const time = tabela.find((infoTime) => infoTime.sigla === siglaInformada)
    if ( time === undefined ) {
        res.status(404).send('Não foi encontrado este time na  série A do Brasileirão 2024')
    }
    res.status(200).send(time)
})

app.put('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase()
    const timeSelecionado = tabela.find((t) => t.sigla === siglaInformada)
    console.log(modeloAtualizaçaoTime.validate(req.body))
    const campos = Object.keys(req.body)
    for (let campo of campos) {
        timeSelecionado[campo] = req.body[campo]
        
    }
    console.log(campos)
    res.status(200).send(timeSelecionado)

})

app.post('/', (req, res) => {
    const novoTime = req.body
    tabela.push(novoTime)
    res.status(200).send(novoTime)

})

app.delete('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase()
    const indiceTimeSelecionado = tabela.findIndex((t) => t.sigla === siglaInformada)
    const timeRemovido = tabela.splice(indiceTimeSelecionado, 1)
    if ( indiceTimeSelecionado === -1 ) {
        res.status(404).send('Não foi encontrado este time na série A do Brasileirão 2024')
        return;
    }
    res.status(200).send(timeRemovido)

})

app.listen(7000, () =>
    console.log("Servidor rodando com sucesso na porta http://localhost:7000")
)
