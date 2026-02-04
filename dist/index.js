"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//EJERCICIO #1
//Calcular el IMC de un Cliente
class Cliente {
    constructor(_nombre, _peso, _altura, _genero) {
        this.nombre = _nombre;
        this.peso = _peso;
        this.altura = _altura;
        this.genero = _genero;
    }
    calcularIMC() {
        const alturaEnMetros = this.altura / 100;
        const imc = this.peso / (alturaEnMetros * alturaEnMetros);
        return parseFloat(imc.toFixed(2));
    }
}
const cliente1 = new Cliente("Juan Perez", 70, 175, "Masculino");
const cliente2 = new Cliente("Maria Lopez", 60, 160, "Femenino");
const cliente3 = new Cliente("Carlos Sanchez", 80, 180, "Masculino");
console.log("---------- Ejercicio 1 - Cálculo de IMC ----------");
console.log(`El IMC de ${cliente1.nombre} es: ${cliente1.calcularIMC()}`);
console.log(`El IMC de ${cliente2.nombre} es: ${cliente2.calcularIMC()}`);
console.log(`El IMC de ${cliente3.nombre} es: ${cliente3.calcularIMC()}`);
console.log("--------------------------------------------------");
//EJERCICIO #2
//Conversiones de temperatura
class Temperatura {
    constructor(_valor, _escala) {
        this.valor = _valor;
        this.escala = _escala;
    }
    convertirEnCelsius() {
        if (this.escala === "F") {
            return parseFloat(((this.valor - 32) * 5 / 9).toFixed(2));
        }
        else if (this.escala === "K") {
            return parseFloat((this.valor - 273.15).toFixed(2));
        }
        else {
            return this.valor;
        }
    }
    convertirEnFahrenheit() {
        if (this.escala === "C") {
            return parseFloat(((this.valor * 9 / 5) + 32).toFixed(2));
        }
        else if (this.escala === "K") {
            return parseFloat(((this.valor - 273.15) * 9 / 5 + 32).toFixed(2));
        }
        else {
            return this.valor;
        }
    }
    convertirEnKelvin() {
        if (this.escala === "C") {
            return parseFloat((this.valor + 273.15).toFixed(2));
        }
        else if (this.escala === "F") {
            return parseFloat(((this.valor - 32) * 5 / 9 + 273.15).toFixed(2));
        }
        else {
            return this.valor;
        }
    }
}
const temp1 = new Temperatura(100, "C");
const temp2 = new Temperatura(212, "F");
const temp3 = new Temperatura(373.15, "K");
console.log("------ Ejercicio 2 - Conversiones de Temperatura ------");
console.log(`${temp1.valor}°${temp1.escala} en Fahrenheit es: ${temp1.convertirEnFahrenheit()}°F`);
console.log(`${temp2.valor}°${temp2.escala} en Celsius es: ${temp2.convertirEnCelsius()}°C`);
console.log(`${temp3.valor}°${temp3.escala} en Kelvin es: ${temp3.convertirEnKelvin()}K`);
console.log("-------------------------------------------------------");
//EJERCICIO #3
//Registro de notas y contar palabras
class Nota {
    constructor(_titulo, _detalle) {
        this.titulo = _titulo;
        this.detalle = _detalle;
    }
    contarPalabras() {
        return this.detalle.split(" ").length;
    }
}
const nota1 = new Nota("Reunión de Proyecto", "Tenemos una reunión programada organizar y discutir los avances del proyecto");
const nota2 = new Nota("Lista de Compras", "Necesitamos comprar leche, pan, huevos y frutas para este mes");
const nota3 = new Nota("Recordatorio de Cumpleaños", "El proximo sabado es el cumple de Ana y debemos comprar un regalo para ella");
console.log("------ Ejercicio 3 - Contar Palabras en una Nota ------");
console.log(`La nota "${nota1.titulo}" tiene ${nota1.contarPalabras()} palabras.`);
console.log(`La nota "${nota2.titulo}" tiene ${nota2.contarPalabras()} palabras.`);
console.log(`La nota "${nota3.titulo}" tiene ${nota3.contarPalabras()} palabras.`);
console.log("-------------------------------------------------------");
//EJERCICIO #4
//Registro de estudiantes y sanciones
class Estudiante {
    constructor(_nombre, _infraccion) {
        this.nombre = _nombre;
        this.infraccion = _infraccion;
    }
    calcularSancion() {
        if (this.infraccion === 1) {
            return "Sanción por llegada tardía";
        }
        else if (this.infraccion === 2) {
            return "Sanción por caminar por los pasillos durante la clase";
        }
        else if (this.infraccion === 3) {
            return "Sanción por vestimenta inapropiada";
        }
        else if (this.infraccion === 4) {
            return "Sanción por uso inadecuado de instalaciones";
        }
        return "Sin sanción";
    }
    calcularMonto() {
        if (this.infraccion === 1) {
            return 1;
        }
        else if (this.infraccion === 2) {
            return 3;
        }
        else if (this.infraccion === 3) {
            return 5;
        }
        else if (this.infraccion === 4) {
            return 10;
        }
        return 0;
    }
}
const estudiante1 = new Estudiante("Luis Gomez", 1);
const estudiante2 = new Estudiante("Ana Martinez", 3);
const estudiante3 = new Estudiante("Pedro Rodriguez", 4);
console.log("------ Ejercicio 4 - Sanciones para Estudiantes ------");
console.log(`${estudiante1.nombre} tiene: ${estudiante1.calcularSancion()} con un monto de $${estudiante1.calcularMonto()}`);
console.log(`${estudiante2.nombre} tiene: ${estudiante2.calcularSancion()} con un monto de $${estudiante2.calcularMonto()}`);
console.log(`${estudiante3.nombre} tiene: ${estudiante3.calcularSancion()} con un monto de $${estudiante3.calcularMonto()}`);
console.log("-------------------------------------------------------");
//# sourceMappingURL=index.js.map