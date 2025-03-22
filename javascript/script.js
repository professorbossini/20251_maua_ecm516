//1 + 2 + 3 + ... + (n-2) + (n-1) + n
const calculoRapidinho = (n) => {
    //caso n seja negativo, devolva uma promise no estado rejected com a mensagem de erro: "Apenas positivos, por favor". Caso contrário, mantenha o que já está pronto
    //não pode usar nem if/else nem switch/case
    //a primeira instrução e única deve ser o return
    return n < 0 ? 
        Promise.reject('Apenas positivos, por favor') : 
        Promise.resolve((n / 2) * (n + 1))
    // return new Promise((resolve, reject) => {
    //     resolve((n / 2) * (n + 1))
    // })    
}
const resultado = calculoRapidinho(-10)
resultado.then(res => {
    console.log(`Funcionou rapidinho: ${res}`)
})
.catch(err => console.log(`Erro: ${err}`))


// function calculoDemorado(n){
//     const p = new Promise((resolve, reject) => {
//         let ac = 0
//         for(let i = 1; i <= n; i++) ac += i
//         resolve(ac)
//     })
//     return p
// }

// const resultado = calculoDemorado(10)
// resultado.then((res) => {
//     console.log(`Funcionou: ${res}`)
//     calculoDemorado(res).then(res2 => {
//         console.log(`Funcionou(2): ${res2}`)
//     })
// })
// .catch(function(err){
//     console.log(`Erro: ${err}`)
// })
// console.log('continuo fazendo outras coisas enquanto isso...')

// const trataResultado = (resultado) => {
//     console.log(resultado)
// }
// computacaoDemorada(trataResultado)
// console.log('fleçwkjalf')

// class Pessoa{
//     public void andar(){}
// }
// while(true){
//     new Pessoa()
// }
// Pessoa p = null
// p.andar()
// const fs = require('fs')
// const abrirArquivo = function(nomeArquivo){
//     const exibirConteudo = function(erro, conteudo){
//         if(erro){
//             console.log(`Deu erro: ${erro}`)
//         }
//         else{
//             console.log(`Funcionou: ${conteudo.toString()}`)
//             const dobro = Number(conteudo.toString()) * 2
//             const finalizar = (erro) => {
//                 if(erro)
//                     console.log(`A escrita deu erro: ${erro}`)
//                 else
//                     console.log('A escrita funcionou')    
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         }
//     } //callback
//     //assincrona
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log('Fim da função exibirConteudo')
// }
// abrirArquivo("arquivo.txt")

//processamento síncrono (bloqueante) e processamento assíncrono (não bloqueante)
//IO-Bound: Input/Output 
//CPU-Bound

// const oi = () => console.log('oi')

// console.log('Começou...')
// oi()
// console.log('Terminou...')
//uma calculadora que faz as operações de soma e subtração, cada uma envolvendo apenas dois operandos
//1. A soma deve ser feita com uma função regular(function)
//2. A subtração deve ser feita com uma arrow function cujo corpo não pode ter nem {} e nem return
//no final, mostre ela em funcionamento, ou seja, some 2 com 3, e subtraia 3 de 5
// const calc = {
//     "somar": function(a, b){ return a + b},
//     subtrair: a => a - b
// }
// console.log(calc.somar(2, 3))
// console.log(calc.subtrair(5, 3))

// const eIssoAqui = calc.somar
// console.log(eIssoAqui(4, 5))


//uma concessionaria tem CNPJ e endereco. Ela possui alguns carros. Cada carro tem marca, modelo e ano de fabricação.
// const concessionaria = {
//     cnpj: '11',
//     endereco: {
//         logradouro: "Rua B",
//         numero: 2
//     },
//     veiculos: [
//         {
//             marca: 'Ford',
//             modelo: 'Fiesta',
//             fabricacao: 2013
//         },
//         {
//             marca: 'VW',
//             modelo: 'Fusca',
//             fabricacao: 1980
//         },
//         {
//             marca: 'GM',
//             modelo: 'Tracker',
//             fabricacao: 2025
//         }
//     ]
// }

// console.log(concessionaria.veiculos[1].modelo)

// for (let i = 0; i < concessionaria.veiculos.length; i++){
//     console.log(concessionaria.veiculos[i])
// }

// for (let veiculo of concessionaria.veiculos){
//     console.log(veiculo.modelo)
// }

//Digite seu nome
//Agora a sua idade

//uma pessoa se chama Maria, tem 21 anos e mora na Rua B, numero 121, bairro J
// const pessoa = {
//     nome: "Maria",
//     idade: 21,
//     'endereco da pessoa': {
//         logradouro: "Rua B",
//         numero: 121,
//         bairro: {
//             nome: "J"
//         },
//         cidade: {
//             nome: "Itu",
//             populacao: 70000
//         }
//     }    
// }
// // console.log(pessoa.endereco.bairro.nome)
// console.log(pessoa['endereco da pessoa']['cidade']['populacao'])
// console.log(pessoa.endereco['cidade'].nome)

//uma pessoa que se chama João e tem 17 anos
// const pessoa = {
//     nome: "João",
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//         return cont
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//         cont++
//     }
//     cont++
//     return {f1, f2}
//     cont++
// }

// const eAgoraResult = eAgora()
// console.log(eAgoraResult.f1())
// eAgoraResult.f2()


// const saudacoesFactory = (saudacao, nome) => {let b; return () => {console.log(`${saudacao}, ${nome}`)}}
// const saudacoesFactory = function(saudacao, nome){
//     let b;
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }
// const olaJoao = saudacoesFactory('Ola', 'João')
// const adeusJoao = saudacoesFactory('Adeus', 'João')
// olaJoao()
// adeusJoao()

// function ola(){
//     let nome = 'João'
//     return function(){
//         console.log(`Olá, ${nome}`)
//     }
// }
// ola()()

// function f(){
//     let nome = 'João'
//     function g(){
//         let a
//         console.log(nome)
//     }
//     g()
// }
// f()

// function f(funcao){
//     funcao()
//     // return 1

// }
// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//     }
//     return outraFuncao
// }
// //exibir o número 1
// console.log(f(g()()))
// const gResult = g()
// gResult()

// f(g())

// g()()



// f(function(){console.log('Fui passada para f')})

// let umaFuncao = function(){
//     console.log('Fui armazenada em uma variável')
// }
// umaFuncao()


//programação imperativa
// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => ac * v, 1)
// console.log(soma)
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// const resultado = nomes.some(n => n.startsWith('A'))
// console.log(resultado)
// const resultado = nomes.every(n => n.startsWith('A'))
// console.log(resultado)
//produza um novo vetor que, para cada elemento do vetor nomes, contenha a sua letra inicial
// ['A', 'A', 'R', 'A', 'C']
// const resultante = nomes.map(function(n){
//     return n[0]
// })
// console.log(resultante)


//produza um novo vetor que contenha somente os nomes que começam com A
//faça usando um for
// const resultante = nomes.filter(nome => nome.startsWith("A") || nome.startsWith('a')) //O(1)
// // const resultante = nomes.filter(n => n.toLowerCase().startsWith('a')) //O(n)
// console.log(resultante)

//programação declarativa


//funções regulares (mais antigo, vc faz com function)
//arrow function => ==
// const triplo = n => 3 * n

// console.log(triplo(10))
// const dobro = (valor) => 2 * valor
// console.log(dobro(6))
// const ex3 = () => 2 + 2
// console.log(ex3())
// const ex2 = a => console.log(a)
// ex2()
// const ex1 = a => {console.log(a)}
// ex1(1)
// () => {}
// //função anônima
// const triplo = function(n = 5){
//     return 3 * n
// }
// console.log(triplo(10))
// console.log(triplo())
// const dobro = function (n){
//     return 2 * n
// }

// console.log(dobro(5))
// function soma(a, b = 5){
//     return a + b
// }
// console.log(soma(2, 3))
// console.log(soma(2))    
// function hello(){
//     console.log('Oi')
// }
// hello()
// function hello(nome){
//     console.log('Oi, ' + nome)
// }
// hello('Ana')
// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[2] = 'abc'
// console.log(v1.length)
// v1[10] = true
// console.log(v1.length)
// console.log(v1)
// for(let i = 0; i < v1.length; i++)
//     console.log(v1[i])
//== ou ===
// console.log([] == [])
// console.log([] == false)
// console.log(undefined == null)
// console.log(undefined == undefined)
// console.log(null == null)
// //null e undefined
// console.log(1 == [1])
// console.log(true == 2)
// console.log(1 === "1")
// console.log(1 === 1)
// console.log(1 == "1")
// console.log(1 == 1)

// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)

//e o var
// var idade = 18
// console.log(`Oi, ${nome}.`)
// if(idade >= 18){
//     var nome = 'André'
//     //hoist: içamento
//     console.log(`Parabéns, ${nome}. Você pode dirigir.`)
// }
// console.log('Tchau, ' + nome + '.')

// var linguagem = "Javascript"
// console.log(`Aprendendo ${linguagem}`)
// var linguagem = "Java"
// console.log(`Aprendendo ${linguagem}`)
// var a = 2
// a = 3
// console.log(a)

//declarando constantes
//let ou var
// let a = 2
// a = 3
// console.log(a)
// a = '4'
// console.log(a)
//final String nome = 'José;"
// nome = 1
// nome.falar()
// const nome = 'José' //"José"
// console.log(nome)
// // nome.falar()
// nome = 'Pedro'
// console.log(nome)
