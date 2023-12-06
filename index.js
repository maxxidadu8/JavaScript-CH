function main() {
    console.log("Bienvenido a la calculadora 3.0");

    for (let i = 0; i < 4; i++) {
        console.log("Ingrese dos números para realizar la suma");
        let num1 = parseInt(prompt("Ingresa el primer número: "));
        let num2 = parseInt(prompt("Ingresa el segundo número: "));

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Ingrese un número válido, por favor");
            i--;
        } else {
            console.log("Primer número" + num1);
            console.log("Segundo número" + num2);

            let operation = parseInt(prompt("Ingrese la operación que desea realizar (1: Suma, 2: Resta, 3: Multiplicación, 4: División)"));

            switch (operation) {
                case 1:
                    add(num1, num2);
                    break;
                case 2:
                    substract(num1, num2);
                    break;
                case 3:
                    multiply(num1, num2);
                    break;
                case 4:
                    divide(num1, num2);
                    break;
                default:
                    console.log("Operación elegida no válida");
                    i--;
            }
        }

        let again = prompt("Desea realizar la operación? (Si/No): ");
        if (again.toLowerCase() === "no") {
            console.log("Gracias por usar la Calculadora 3.0. ¡Hasta luego!");
            break;
        }
    }
}

function add(a, b) {
    let sum = a + b;
    console.log("El resultado de la suma es: " + sum);
}

function substract(a, b) {
    let difference = a - b;
    console.log("El resultado de la resta es: " + difference);
}

function multiply(a, b) {
    let product = a * b;
    console.log("El resultado de la multiplicación es: " + product);
}

function divide(a, b) {
    if (b === 0) {
        console.log("La división por cero, no es posible");
    } else {
        let quotient = a / b;
        console.log("El resultado de la división es: " + quotient);
    }
}

main();
