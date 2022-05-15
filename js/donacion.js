/* Prueba de enlace */
console.log ("hola");

/* Validación Número de tarjeta */
const $inputTarjeta = document.querySelector("#inputNumberTarjeta");

$input.addEventListener("keyup",()=>{
    if($inputTarjeta.value.length >=19){
        console.log($inputTarjeta.value.slice(0,19))
        $inputTarjeta.value = $inputTarjeta.value.slice(0,19)
    }
})

/* Validación CVV */
const $input = document.querySelector("#inputNumberCVV");

$input.addEventListener("keyup",()=>{
    if($input.value.length >=4){
        console.log($input.value.slice(0,4))
        $input.value = $input.value.slice(0,4)
    }
})