




let numero1 = 2

function potenciar (num1) {
    numero1 = num1 ** 2
    return numero1
}

function operar(num2, num3, callback) {

    let numero2 = num3 ** 3 //27

    setTimeout(callback, 8000, num2) //25 pero despues de 3 segundos se ejecuta el callback y numero1 se actualiza a 25

    console.log (`numero 1 vale ${numero1} y aun no se ejecuto el callback, 
        entonces el resultado es ${numero1 + numero2}`) //numero1 vale dos y el resultado es 29


        //aca ya veo el resultado del primer setTimeOut a los 3 seg entonces el numero1 vale 25
    setTimeout(() => {
        console.log (`numero 1 vale ${numero1} y el callback ya se ejecuto, 
            entonces el resultado es ${numero1 + numero2}`) //numero1 vale 25 y numero2 vale 27 entonces el resultado es 52
    }, 15000);
}

operar (5,3,potenciar)

