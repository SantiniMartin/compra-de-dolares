/* Compra de dolares: */
alert("¡Bienvenido!\nLa cotización del dolar actual es de: $290/arg")

/* Se define el precio del dolar actual */
const priceDollar = 290

function totalDollar (buyDollar){
    return (buyDollar / priceDollar).toFixed(2)
    
}

/* Se consulta al usuario si desea realizar una compra */
let option = prompt("¿Desea realizar una compra? Ingrese SI/NO").toUpperCase()

while (option == "SI"){
    buyDollar = parseInt(prompt("¿Ingrese el importe de pesos para la compra de dolares?"))
    if (buyDollar < 290){
        alert("Ingrese otro monto")
    } else{
        alert("Usted a comprado " + "$" + totalDollar(buyDollar))
    }
    option = prompt("¿Desea realizar una compra? Ingrese SI/NO").toUpperCase()
}