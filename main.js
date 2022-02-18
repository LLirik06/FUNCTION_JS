// - процедура
// function name([params]) {
//     инструкция    
// }
// name([аргумент])

// function send_Message(){
//     alert('Hello, I learn new function')
// }
// send_Message()
// send_Message()

// let name = prompt('Enter your name') //- глобальные переменные (учавствуют коде и в функции)
// function message(name, age){
//     // let age = prompt('Enter your age') //- локальные переменные (учавствуют в функции (перекрывают глобальные))
//     let a = `Hello, your name is ${name}, your age is ${age}`
//     alert(a)
// }
// let k = prompt('Enter your name')
// let b = prompt('Enter your age')
// message(k, b)


// Синтаксис функции
// function name(params) {
//     инструкиция
//     return  // - результат
// }
// let a = name()
// alert(a)

// function message(name, age){
//     // let age = prompt('Enter your age') //- локальные переменные (учавствуют в функции (перекрывают глобальные))
//     let a = `Hello, your name is ${name}, your age is ${age}`
//     return a
// }
// let A = message('Dan', 24)
// alert(A)

// function sum(a, b) {
//     c = a + b
//     return c
// }
// let result = sum(2, 2)
// alert(result)


// Fun 1 
// function display_message(){
//     let a = `Hello, you love your second half`
//     alert(a)
// }
// display_message()


// Fun2
// function favourite_book(){
//     let title = prompt('Enter you favourite book')
//     let a = `One of my favourite book is ${title}`
//     alert(a)
// }
// favourite_book()


// Fun3
// function make_shirt() {
//     let size = prompt('Enter your size (S, M, L)')
//     let text = prompt('Enter the text, that will be print on your shirt')
//     let a = `Your size is ${size}, and you want to print "${text}"`
//     alert(a)
// }
// make_shirt()


// Fun 4
// let size = prompt('Enter your size (S, M, L)')
// let text = prompt('Enter the text, that will be print on your shirt')
// make_shirt("L", "I love JS");
// function make_shirt(size, text){
//     let a = `Your size is ${size}, and you want to print "${text}"`
//     alert(a)
// }
// make_shirt(size, text);


// Fun 5
// let city = prompt('Enter your city')
// let country = prompt('Enter country')
// describe_city('London', 'UK')
// function describe_city(city, country) {
//         let a = `${city} is in ${country}`
//         alert(a)
// }
// describe_city(city, country)
