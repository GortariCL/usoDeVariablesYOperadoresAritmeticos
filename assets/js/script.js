$(document).ready(function () {

    $('#btn-mat').on('click', function suma() {
        let numeroUno = prompt("Ingrese el primer número: ", "1");
        let numeroDos = prompt("Ingrese el segundo número: ", "2");

        let suma = parseFloat(numeroUno) + parseFloat(numeroDos);
        let resta = parseFloat(numeroUno) - parseFloat(numeroDos);
        let mult = parseFloat(numeroUno) * parseFloat(numeroDos);
        let div = parseFloat(numeroUno) / parseFloat(numeroDos);
        let mod = parseFloat(numeroUno) % parseFloat(numeroDos);

        alert('Los resultados son: \nSuma: ' + suma +'\nResta: ' +resta+'\nMultiplicación: '+mult+'\nDivisión: '+div+ '\nModulo: '+mod);
    });

});