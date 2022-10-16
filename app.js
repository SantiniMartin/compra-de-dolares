/* Se define las cotizaciones actuales */
let precioMoneda = [290, 282, 85]

function totalCompra (monto, moneda){
    return (monto / precioMoneda[moneda-1]).toFixed(2)   
}

function ordenCompra(){
    alert("¡Bienvenido!\nPrecio de las cotizaciones actuales de las monedas:\nDolar: $290\nEuro: $282\nReal: $82")

/* Se consulta al usuario si desea realizar una compra */
let compra = prompt("¿Desea realizar una compra? Ingrese SI/NO").toUpperCase()

while (compra == "SI"){
    let moneda = prompt("Ingrese un número según la moneda que desea comprar:\n1)Dolar\n2)Euro\n3)Real ")
    monto = parseInt(prompt("¿Ingrese el importe de pesos para de su moneda?"))

    if (monto < precioMoneda[moneda]){
        alert("Ingrese otro importe")
    } else {
        alert("Usted a comprado " + "$" + totalCompra(monto, moneda))
    }
    compra = prompt("¿Desea realizar una compra? Ingrese SI/NO").toUpperCase()
}
}

ordenCompra()