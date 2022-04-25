function positions(firstPlace, secondPlace, lastPlace) {
    let competidores = [firstPlace, secondPlace, lastPlace]
    if(firstPlace == "Rafael" && secondPlace == "Daniel") {
        competidores.splice(0, 2, "Daniel", "Rafael")
        return '1º Colocado: ' + competidores[0] + ', 2º Colocado: ' + competidores[1] + ", 3º Colocado: " + competidores[2]
    } if(firstPlace == "Manoel" && secondPlace == "Daniel") {
        competidores.splice(0, 2, "Daniel", "Manoel")
        return '1º Colocado: ' + competidores[0] + ', 2º Colocado: ' + competidores[1] + ", 3º Colocado: " + competidores[2]
    } if(secondPlace == "Rafael" && lastPlace == "Daniel") {
        competidores.splice(1, 2, "Daniel", "Rafael")
        return '1º Colocado: ' + competidores[0] + ', 2º Colocado: ' + competidores[1] + ", 3º Colocado: " + competidores[2]
    } if(secondPlace == "Manoel" && lastPlace == "Daniel") {
        competidores.splice(1, 2, "Daniel", "Manoel")
        return '1º Colocado: ' + competidores[0] + ', 2º Colocado: ' + competidores[1] + ", 3º Colocado: " + competidores[2]
    }
    else {
        return '1º Colocado: ' + competidores[0] + ', 2º Colocado: ' + competidores[1] + ", 3º Colocado: " + competidores[2]
    }
}
//Os valores da variável teste podem ser trocados para testar a função.
let teste = positions("Rafael", "Daniel", "Manoel")
console.log(teste)