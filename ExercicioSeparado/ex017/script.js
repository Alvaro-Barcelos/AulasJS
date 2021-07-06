function tabuada(){
    let num = document.querySelector('#txtn')
    let imprimir = document.querySelector('#select_tabuada')
    if (num.value.length == 0){
        alert('[ERRO] Preencha os campos!')
    }
    
    else{
        let e = 1
        let n = Number(num.value)
        for (let c = n; c <= 10; e ++){
            let item = document.createElement('option')
            item.text = `${c} x ${e} = ${c * e}`
            imprimir.appendChild(item)
        }
    }
}