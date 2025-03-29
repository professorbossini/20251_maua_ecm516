//async/await
const fatorial = (n) => {
    if(n < 0) return Promise.reject('Apenas valores positivos')
        // return Promise.resolve(res)
    return new Promise((resolve, reject) => {
        let res = 1
        for(let i = 2; i <= n; i++) res *= i
        resolve(res)
    })
}

// const comThenCatch = () => {
//     fatorial(10)
//     .then(res => console.log(`Resultado: ${res}`))
//     .catch(err => console.log(`Erro: ${err}`))

//     fatorial(-10)
//     .then(res => console.log(`Resultado: ${res}`))
//     .catch(err => console.log(`Erro: ${err}`))
// }
// comThenCatch()

//localhost:3000/livros
// app.get('/livros', async (req, res) =>{
//     const livros = await bd.pegarLivros()
//     res.send(livros)
// })

// const comAsynAwait = async () => {
//     try{
//         const f1 = await fatorial(10)
//         console.log(f1)
//     }
//     catch(err){
//         console.log(`Erro: ${err}`)
//     }
//     try{
//         const f2 = await fatorial(-10)
//         console.log(f2)
//     }
//     catch(err){
//         console.log(`Erro: ${err}`)
//     }    
// }

// comAsynAwait()

// const hello = async (nome) => {
//     // return `Oi, ${nome}`
//     const dataAtual = new Date().getTime() + 2000
//     while(new Date().getTime() <= dataAtual);
//     return `Oi ${nome}`

// }
// // async function hello(nome){
// //     return `Oi, ${nome}`
// // }
// console.log(hello('Ana'))
// console.log('Acabou')
// // hello('Ana').then(res => console.log(res))
// //síncrono
// // const res = hello('Ana')
// // console.log(res)
// console.log("Acabou")

// const axios = require('axios')
// // const n = 1743260400
// // console.log(new Date(0).toISOString())
// const q = 'Itu'
// const appid = 'ef0b0973b783e0614ac87612ec04344b'
// const cnt = '2'
// const units = 'metric'
// const baseURL = 'api.openweathermap.org/data/2.5/forecast'
// const lang = 'pt_br'
// const url = `https://${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`
// console.log(url)
// axios.get(url)
// .then((res) => {
//     console.log(res)
//     console.log("************************************")
//     return res.data
// })
// .then(function(res){
//     console.log(`cnt: ${res.cnt}`)
//     console.log("************************************")
//     return res
// })
// .then(abc => {
//     //mostrar a temperatura máxima da primeira previsão
//     console.log(`Temp max: ${abc.list[0].main.temp_max}`)
//     //devolver apenas a lista de previsões a seguir
//     console.log("************************************")
//     return {list: abc.list, city: abc.city}
// })
// .then(res => {
//     //para cada previsão, mostrar:
//     //descrição, sensação térmica,
//     //for of
//     for(let previsao of res.list){
//         console.log(`${previsao['weather'][0]['description']}`)
//         console.log(`${previsao.main.feels_like}\u00B0`)
//     }
//     //nascer e pôr do sol
//     console.log(`Nascer do Sol: ${new Date(res.city.sunrise * 1000).toLocaleTimeString()}`)
//     console.log(`Pôr do Sol: ${new Date(res.city.sunset * 1000).toLocaleTimeString()}`)
//     // axios.get(res.url1).then(res2 => {
//     //     axios.get(res.url2).then(res3 => {

//     //     })
//     // })
// })

//colocar seu nome e solução no dontpad.com/bossini

