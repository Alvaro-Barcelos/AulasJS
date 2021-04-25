let numeros = [1,4,3,6,8,2]
/*for(pos = 0;pos < numeros.length;pos++ ){
    numeros.sort()
    console.log(`A posição ${pos}, tem o numero ${numeros[pos]}`)
}
*/
for(let pos in numeros){
    console.log(`A posição ${pos}, tem o valor ${numeros[pos]}`)
}