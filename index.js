// ARRAY Y OBJETO

const historial = [];

class Operacion {
    constructor(simbolo, num1, num2, resultado) {
        this.simbolo = simbolo;
        this.num1 = num1;
        this.num2 = num2;
        this.resultado = resultado;
    }
}

function main() {
    console.log("Bienvenido a la calculadora 3.0");

    for (let i = 0; i < 5; i++) {
        let operation = parseInt(prompt("Ingrese la operación que desea realizar: \n 1-Suma \n 2-Resta \n 3-Multiplicación \n 4-División \n 5-Ver Historial"));

        switch (operation) {
            case 1:
                add();
                break;
            case 2:
                subtract();
                break;
            case 3:
                multiply();
                break;
            case 4:
                divide();
                break;
            case 5:
                verHistorial();
                break;
            default:
                console.log("Opción elegida no válida");
                i--;
                continue;
        }

        let again = prompt("Desea realizar la operación? (Si/No): ");
        if (again.toLowerCase() === "no") {
            console.log("Gracias por usar la Calculadora 3.0. ¡Hasta luego!");
            break;
        }
    }
}

function verHistorial() {
    const simbolo = prompt("Elija un símbolo para filtrar historial: \n + Suma \n - Resta \n * Multiplicación \n / División");

    const filtrado = historial.filter((operation) => {
        return operation.simbolo === simbolo;
    });

    let mensaje = '';
    filtrado.forEach((operation) => {
        mensaje = mensaje + operation.num1 + operation.simbolo + operation.num2 + "=" + operation.resultado + '\n';
    });
    alert(mensaje);
}

function add() {
    let num1 = parseInt(prompt("Ingresa el primer número: "));
    let num2 = parseInt(prompt("Ingresa el segundo número: "));
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Ingrese un número válido, por favor");
        return;
    }
    console.log("Primer número: " + num1);
    console.log("Segundo número: " + num2);

    let sum = num1 + num2;
    console.log("El resultado de la suma es: " + sum);

    const operacion = new Operacion("+", num1, num2, sum);
    historial.push(operacion);
}

function subtract() {
    let num1 = parseInt(prompt("Ingresa el primer número: "));
    let num2 = parseInt(prompt("Ingresa el segundo número: "));
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Ingrese un número válido, por favor");
        return;
    }
    console.log("Primer número: " + num1);
    console.log("Segundo número: " + num2);

    let difference = num1 - num2;
    console.log("El resultado de la resta es: " + difference);

    const operacion = new Operacion("-", num1, num2, difference);
    historial.push(operacion);
}

function multiply() {
    let num1 = parseInt(prompt("Ingresa el primer número: "));
    let num2 = parseInt(prompt("Ingresa el segundo número: "));
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Ingrese un número válido, por favor");
        return;
    }
    console.log("Primer número: " + num1);
    console.log("Segundo número: " + num2);

    let product = num1 * num2;
    console.log("El resultado de la multiplicación es: " + product);

    const operacion = new Operacion("*", num1, num2, product);
    historial.push(operacion);
}

function divide() {
    let num1 = parseInt(prompt("Ingresa el primer número: "));
    let num2 = parseInt(prompt("Ingresa el segundo número: "));
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Ingrese un número válido, por favor");
        return;
    }
    console.log("Primer número: " + num1);
    console.log("Segundo número: " + num2);

    let quotient;
    if (num2 === 0) {
        console.log("La división por cero no es posible");
        return;
    } else {
        quotient = num1 / num2;
        console.log("El resultado de la división es: " + quotient);
    }
    const operacion = new Operacion("/", num1, num2, quotient);
    historial.push(operacion);
}

main();
console.log(historial);
