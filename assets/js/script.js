$(document).ready(function () {

    $('#btn-mat').on('click', function suma() {
        let numeroUno = prompt("Ingrese el primer número: ", "1");
        let numeroDos = prompt("Ingrese el segundo número: ", "2");

        let suma = parseFloat(numeroUno) + parseFloat(numeroDos);
        let resta = parseFloat(numeroUno) - parseFloat(numeroDos);
        let mult = parseFloat(numeroUno) * parseFloat(numeroDos);
        let div = parseFloat(numeroUno) / parseFloat(numeroDos);
        let mod = parseFloat(numeroUno) % parseFloat(numeroDos);

        alert('Los resultados son: \nSuma: ' + suma + '\nResta: ' + resta + '\nMultiplicación: ' + mult + '\nDivisión: ' + div + '\nModulo: ' + mod);
    });

    $('#btn-tem').on('click', function temperatura() {
        let tempUser = prompt("Ingrese la temperatura sin la extención °C", "25");
        let kelvin = parseFloat(tempUser) + 279.15;
        let farenheit = (parseFloat(tempUser) * (9 / 5)) + 32;

        alert('La conversión corresponde a: \n· ' + kelvin + ' K\n· ' + farenheit + '° F');
    });

    $('#btn-date').on('click', function date() {
        let cantDays = prompt("Ingrese la cantidad de días: ", "365");
        let PreYear = parseFloat(cantDays) / 365;
        let moduloYear = parseFloat(cantDays) % 365;
        let PreWeeks = moduloYear / 7;
        let moduloWeeks = moduloYear % 7;

        let year = Math.floor(PreYear);
        let weeks = Math.floor(PreWeeks);
        let days = Math.floor(moduloWeeks);

        alert('Los días ingresados corresponden a: ' + year + ' años, ' + weeks + ' semanas y ' + days + ' días');
    });

    $('#btn-prom').on('click', function promedio() {
        let numUno = prompt("Ingrese el primer número: ", "1");
        let numDos = prompt("Ingrese el segundo número: ", "2");
        let numTres = prompt("Ingrese el tercer número: ", "3");
        let numCuatro = prompt("Ingrese el cuarto número: ", "4");
        let numCinco = prompt("Ingrese el quinto número", "5");

        let sumNums = parseFloat(numUno) + parseFloat(numDos) + parseFloat(numTres) + parseFloat(numCuatro) + parseFloat(numCinco);
        let promedio = sumNums / 5;

        alert('· La suma de los números es: ' + sumNums + '\n· Promedio de los números: ' + promedio);
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});