const express = require('express')
const app = express()
app.use(express.json())

/*
{
  1: {
    id: 1,
    texto: 'ver um filme',
    observacoes: [
      {
        id: 1000,
        texto: 'comprar pipoca',
        lembreteId: 1
      }
    ]
  }
  2: {
    id: 2,
    texto: 'ir à feira'
  }
}
*/
const baseConsolidada = {}

const funcoes = {
  LembreteCriado: (lembrete) => {
    baseConsolidada[lembrete.id] = lembrete
  },
  ObservacaoCriada: (observacao) => {
    const observacoes = 
      baseConsolidada[observacao.idLembrete]['observacoes'] || []
    observacoes.push(observacao)
    baseConsolidada[observacao.idLembrete]['observacoes'] = observacoes

  },
}
app.get('/lembretes', (req, res) => {
  res.json(baseConsolidada)
})

app.post('/eventos', (req, res) => {
  const evento = req.body
  console.log(evento)
  funcoes[evento.tipo](evento.dados)
  res.end()  
})

const port = 6000
app.listen(port, () => console.log(`Consulta. Porta ${port}.`))