function checaNumeroPrimo(n) {
    let divisores = 0
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisores++;
        }
    }
        
    if (divisores === 2){
        return 'É primo'
    } 
    else {
        return 'Não é primo'
    }

}

while (false) {

    n = Number(prompt("Digite um numero."))
    
    if (n > 2) {
        primo = checaNumeroPrimo(n)
        alert(primo)
    }
    else {
        break
    }
}



function verificarNumeroPrimo() {

    numero = document.getElementById("numero")
    ePrimo = checaNumeroPrimo(numero.value)

    document.getElementById('resultado').innerHTML = ePrimo
}

