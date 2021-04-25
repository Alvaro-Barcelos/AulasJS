/*let a = ['carro','caminhão','moto']
console.log(`Arrays ${a.length}`)
console.log(a[2]) 
*/
let numero = [1,5,3,9,6]
numero.push(7)
numero.sort()
console.log(`O vetor tem ${numero.length} posições`)
console.log(`O primeiro valor do vetor é ${numero[0]}`)
let pos = numero.indexOf(4)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
}
else(
    console.log(`O valor foi encontrado na posição ${pos}`)    
)