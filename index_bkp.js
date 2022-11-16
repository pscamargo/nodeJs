// const http = require('http')
// const fs = require('fs')
const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual o seu nome? ', function(name){
    console.log('O nome do usuário é: '+name)
   
    rl.question('Qual sua idade? ', function(idade){
        console.log('A idade do '+name+' é '+idade)

        rl.question('Qual o ano que vc nasceu? ', function(ano){
            console.log('A idade do '+name+' é '+idade+' e nasceu em: ' +ano)
        })
    })
})

rl.on('close', ()=>{
    console.log('Adeus!!')
    process.exit(0)
})

// const hostname = '127.0.0.1'
// const port = 3000

//Deleta arquivo
// fs.unlink('danki.txt', (err)=>{
//     console.log('arquivo foi deletado')
// })

// //Renomeia Arquivo
// fs.rename('danki.txt', 'dankicode.txt', (err)=>{
//     console.log('arquivo foi renomeado')
// })

// fs.readFile('danki.txt', function(err, data){
//     // console.log(data.toString())
//     let str = data.toString()
//     // let newStr = str.split('/');
//     let newStr = str.substr(1,3)
//     console.log(newStr)
// })
//Criar um novo arquivo
// fs.writeFile('danki.txt', 'teste anki code', function(err){
//     if(err) throw err
//     console.log('O arquivo foi criado com sucesso')
// })

//Cria novo arquivou ou insere o conteudo do que ja existe
// fs.appendFile('danki.txt', '\noutro conteúdo', (err) => {
//     if(err) throw err
//     console.log('salvo novamente com sucesso')
// })

// const server = http.createServer((req, res) => {

//     if (req.url == '/danki') {
//         fs.read_file('index.html', function (err, data) {
//             res.write_head(200, { 'content-type': 'text/html' })
//             res.write(data)
//             return res.end()
//         })
//     }else{
//         return res.end()
//     }

    // fs.read_file('index.html', function(err, data){
    //     res.write_head(200, {'content-type':'text/html'})
    //     res.write(data)
    //     return res.end()
    // })
    // res.statuscode = 200
    // res.setheader('content-type', 'text/plain')
    // res.end("hello danki")
// })

// server.listen(port, hostname, () => {
//     console.log("servidor está rodando!")
// })