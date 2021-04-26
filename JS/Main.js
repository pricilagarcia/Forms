
function multiplicar(){
    var num1 = document.getElementById("num-1").value 
    var num2 = document.getElementById("num-2").value 
    var txt_respuesta = document.getElementById("txt_respuesta")
    var respuesta = num1*num2
    txt_respuesta.textContent = respuesta

}

var btn_m = document.getElementById("btn_m")
btn_m.addEventListener('click', multiplicar)


function dividir(){
    var num1 = document.getElementById("num-1").value 
    var num2 = document.getElementById("num-2").value 
    var txt_respuesta = document.getElementById("txt_respuesta")
    var respuesta = num1/num2
    txt_respuesta.textContent = respuesta
}

var btn_d = document.getElementById("btn_d")
btn_d.addEventListener('click', dividir)


function restar(){
    var num1 = document.getElementById("num-1").value 
    var num2 = document.getElementById("num-2").value 
    var txt_respuesta = document.getElementById("txt_respuesta")
    var respuesta = num1-num2
    txt_respuesta.textContent = respuesta
}

var btn_r = document.getElementById("btn_r")
btn_r.addEventListener('click', restar)

//--------
function sumar(){
    var num1 = document.getElementById("num-1").value 
    var num2 = document.getElementById("num-2").value 
    
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    var txt_respuesta = document.getElementById("txt_respuesta")
    var respuesta = num1+num2
    txt_respuesta.textContent = respuesta
}

var btn_s = document.getElementById("btn_s")
btn_s.addEventListener('click', sumar)

//------

