// n = 100
// for(let i = 0; i <n; i+=2){
//     if (i % 2 == 0)
//     console.log(i + 1)
// }

// let media = 0
// let n = 5
// for (let i = 0; i < n; i++){
//     let salario = Math.random() * 1000
//     console.log("Salário: ", salario.toFixed(2))
//     media += salario
// }
// media = media / n

// console.log("Média", media.toFixed(2))

let salario = 15000
let n = 5
console.log('Salário:', salario)
for (let i = 0; i < 5; i++){
    salario = salario / 2
    console.log('Salário atualizado:', salario)
}