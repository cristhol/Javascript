const NUMERO_CALIFICACIONES = prompt("ingrese el numero de calificaciones")
let sumatoria = 0
let promedio = 0


for(let index = 1; index <= NUMERO_CALIFICACIONES; index++){
    const CALIFICACION = prompt("ingrese la calificacion: "+ index)
    sumatoria = sumatoria + parseFloat(CALIFICACION)
}

promedio = sumatoria / NUMERO_CALIFICACIONES

alert("el promedio es: " + promedio)