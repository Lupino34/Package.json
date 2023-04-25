//              Конвертация валют
// const ss = require('currency-converter-lt');
// let currencyConverter = new ss({from:"USD", to:"JPY", amount:100})//из чего во что переводим {100 $}
// let currencyConverter1 = new ss({from:"USD", to:"EUR", amount:100})//из чего во что переводим {100 $}

// currencyConverter1.convert().then((response) => {
//     console.log(`result: ${response}`) //{usd/eur}
// })
// currencyConverter.convert().then((response) => {
//     console.log(`result: ${response}`) //{usd/jpy}
// })
//              запуск новой программы (os) --какая операционая система установлена
// const os = require('os')
// let res = os.platform()
// console.log(res) //показывает какая операционая система установлена
// //              Создание своего модуля
// //   "./" - обращение к текущей директории

// const my_match = require('./my_match')
// let res1 = my_match.add(4, 9)
// let res2 = my_match.minus(9, 5)
// console.log(`res1: ${res1}, res2: ${res2}`)

//                  Работа с файлами

//  1. Подключаем модуль
// const fs = require('fs') // file system
//  --Cоздание файла
// fs.writeFileSync('some.txt', 'Hello word!')// за счет функции 'writeFileSync' - можем создавать файл и вписывать туда любую информацию. {в редакторе создался новый файл "some.txt"}
//  --Считывание данных     
// let result = fs.readFileSync('some.txt', 'utf-8') 
                    // синхронная функция : readFileSync, writeFileSync; асинхронная фунция :readFile, writeFile - выполняет постепенно код, не останавливаясь на чтение

// console.log(result)

//                  Асинхроная функция:
// const fs = require('fs')

// let result = fs.readFile('some.txt','utf-8', (err, data)=> { 
//     fs.writeFile('some.text', data + '\nSome text', ()=> {
//         console.log('Все сработало!')
//     }) 
// })
//                          Работа с папками
// Для работы с директориями существует fs - file system
const fs = require('fs')
// Для созданния папки используем функцию mkdir(mkdirSync - синхронная функция, )
// fs.mkdirSync('text-files')
// fs.mkdir('text-files', () => {
//     fs.writeFile('./text-files/some.txt', 'Hello Lupino', () => {})
// })