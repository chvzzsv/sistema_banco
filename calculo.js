
/**
 * Capturar los textos
 */

//SPAN
const depositoTexto = document.getElementById('depositoActual'),
    retiroTexto=document.getElementById('retiroActual'),
    balanceTexto=document.getElementById('balanceActual'),

//const para definir otra variable

/**
 * Capturar los input
 */
    inputDeposito=document.getElementById('depositoInput'),
    inputRetiro=document.getElementById('retiroInput'),

    /**
     * Capturar botones
     */
    btnDeposito=document.getElementById('calcularDeposito'),
    btnRetiro=document.getElementById('calcularRetiro')

    /**
     * Agregar evento deposito
     */
    /*PARA DARLE UN EVENTO AL CLICK
    btnDeposito.addEventListener('click',(event)=>{
        console.log("hola mundo");
    })*/

    btnDeposito.addEventListener('click',(event)=>{
        const valorDeposito = inputDeposito.value
        //se pasa el valor depósito a un número
        const totalDeposito = Number(depositoTexto.innerText)+Number(valorDeposito)
        //para que el balance se vaya sumando
        const totalBalance = Number(balanceTexto.innerText)+Number(valorDeposito)
        depositoTexto.innerHTML=totalDeposito
        balanceTexto.innerHTML=totalBalance
        //para quitar el valor en el textBox de la pág
        inputDeposito.value=''
    })

    /**
     * Evento del retiro
     */
    btnRetiro.addEventListener('click',(event)=>{
        const valorRetiro = inputRetiro.value
        //if(valorRetiro===0){
        if(valorRetiro==0){

            alert("No tengo nada que retirar")
            return
        }

        if(Number(valorRetiro)>Number(balanceTexto.innerText)){
            alert("No hay dinero suficiente")
            //ESTO MODIFICAR alert("Terricola")
            return
        }

        /*const totalDeposito = Number(depositoTexto.innerText)+Number(valorDeposito)
        const totalBalance = Number(balanceTexto.innerText)+Number(valorDeposito)
        depositoTexto.innerHTML=totalDeposito
        balanceTexto.innerHTML=totalBalance
        
        inputDeposito.value=''*/

        alert("Retiro exitoso")
    })