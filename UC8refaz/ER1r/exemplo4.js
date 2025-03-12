let listadePecas = []
listadePecas.push('Disco de freio')
listadePecas.push('Motor')
listadePecas.push('Amortecedor')
//lista exemplo2 = // let listadePecas = [Disco de freio, Motor, Amortecedor]

//listadePecas[1] = 'Pastilha' // alterar item da lista pelo indice

if (listadePecas.length <10){
    console.log('É possível cadastrar mais peças!!')
}
else{
    console.log('Não há mais espaço na caixa')
}

let peso = 120
if (peso <100){
    console.log('A peça deve pesar no mínimo 100g')
    }
else{
    console.log('A peça possiu o peso adequado!')
}

let nomePeca = "am"

if (nomePeca.length > 3){
    console.log("O nome da peça está adequado para o cadastro.")
}

else if (nomePeca.length == 0){
    console.log("O nome da peça não pode estar vazio.")
}
else{
    console.log(" O nome da peça deve ter mais de 3 caracteres, digite o nome adequado")
}


