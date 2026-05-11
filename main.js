
let mostrar_pantalla_resultado = document.getElementById("pantalla")

let btn_suma = document.getElementById("suma")

let btn_resta = document.getElementById("resta")

let btn_multiplicacion = document.getElementById("multiplicacion")

let btn_division = document.getElementById("division")

let btn_igual = document.getElementById("igual")

let btn_reinicio = document.getElementById("reinicio")

let btn_borrar = document.getElementById("borrar")

let btn_1 = document.getElementById("1")

let btn_2 = document.getElementById("2")

let btn_3 = document.getElementById("3")

let btn_4 = document.getElementById("4")

let btn_5 = document.getElementById("5")

let btn_6 = document.getElementById("6")

let btn_7 = document.getElementById("7")

let btn_8 = document.getElementById("8")

let btn_9 = document.getElementById("9")

let btn_0 = document.getElementById("0")

let primer_numero = ""
let segundo_numero = ""
let operacion = ""


//evento de numeros

btn_1.addEventListener("click", () => {
    if (mostrar_pantalla_resultado.textContent === "0") {
        mostrar_pantalla_resultado.textContent = "1"
    } else {
        mostrar_pantalla_resultado.textContent += "1"
    }
})

btn_2.addEventListener("click", () =>{

    if (mostrar_pantalla_resultado.textContent === "0") {
        mostrar_pantalla_resultado.textContent = "2"
    } else {
        mostrar_pantalla_resultado.textContent += "2"//hacer analogo para los demas numeros
    }
})




//evento resta

btn_resta.addEventListener("click", () =>{

    console.log("primer:", primer_numero)
    console.log("segundo:", segundo_numero)
    console.log("pantalla:", mostrar_pantalla_resultado.textContent)


    //if (mostrar_pantalla_resultado.textContent === "") return

    primer_numero = mostrar_pantalla_resultado.textContent // guarda el numero del boton en la variable "primer_numero"
    
    operacion = "-" //guarda el valor de la operacion en la variable "operacion"
    
    mostrar_pantalla_resultado.textContent = ""

})


//calculos

btn_igual.addEventListener("click", () => {


    if (primer_numero === "" || mostrar_pantalla_resultado.textContent === "") {
        return
    }


    segundo_numero = mostrar_pantalla_resultado.textContent

    let resultado = 0

    if(operacion === "-"){
        resultado = Number(primer_numero) - Number(segundo_numero)
    }
    mostrar_pantalla_resultado.textContent = resultado
})
