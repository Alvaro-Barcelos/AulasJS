function contar() {
    let inicio = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let dados = document.querySelector('.imprimir_dados')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERROR!!!] Favor preencher todas as caixas')
    }
    else{
        dados.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c += p){
            dados.style.color = 'red'
            dados.innerHTML += `${c} `
            
        }
        
    }
}