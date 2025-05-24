const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

//quando o consulta iniciar a sua operação, pedir a base de eventos perdidos para o barramento e tratar cada um, potencialmente atualizando a base consolidada
//desafio: usar a função forEach

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
  LembreteCriado: async (lembrete) => {
    baseConsolidada[lembrete.id] = lembrete
  },
  ObservacaoCriada: async (observacao) => {
    const observacoes = 
      baseConsolidada[observacao.idLembrete]['observacoes'] || []
    observacoes.push(observacao)
    baseConsolidada[observacao.idLembrete]['observacoes'] = observacoes

  },
  //lidar com o evento ObservacaoAtualizada, ou seja, atualizar a observacao em questão na base consolidada
  ObservacaoAtualizada: async (observacao) => {
    const observacoes = baseConsolidada[observacao.idLembrete]['observacoes']
    const indice = observacoes.findIndex(o => o.id === observacao.id)
    observacoes[indice] = observacao
  }
}

app.get('/lembretes', (req, res) => {
  res.json(baseConsolidada)
})

app.post('/eventos', async (req, res) => {
  try{
    const evento = req.body
    console.log(evento)
    await funcoes[evento.tipo](evento.dados)
  }
  catch(e){
    console.log(e)
  }
  finally{
    res.end()  
  }
})

const port = 6000
app.listen(port, async () => {
  console.log(`Consulta. Porta ${port}.`)
  const { data } = await axios.get('http://localhost:10000/eventos')
  data.forEach(async (evento) => {
    try{
      await funcoes[evento.tipo](evento.dados) 
    }
    catch(e){}
  })
})