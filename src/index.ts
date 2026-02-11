//Enrique Alexander Hernandez Romero

//EJERCICIO #1
//Calcular el IMC de un Cliente
class Cliente {
    nombre: string;
    peso: number;
    altura: number;
    genero: string;

constructor(_nombre: string, _peso: number, _altura: number, _genero: string){
    this.nombre = _nombre;
    this.peso = _peso;
    this.altura = _altura;
    this.genero = _genero;
}
calcularIMC(): number {
    const alturaEnMetros = this.altura / 100;
    const imc = this.peso / (alturaEnMetros * alturaEnMetros);
    return parseFloat(imc.toFixed(2));
}
}

let cliente1 = new Cliente("Juan Perez", 70, 175, "Masculino");
let cliente2 = new Cliente("Maria Lopez", 60, 160, "Femenino");
let cliente3 = new Cliente("Carlos Sanchez", 80, 180, "Masculino");


console.log("---------- Ejercicio 1 - Cálculo de IMC ----------");
console.log(`El IMC de ${cliente1.nombre} es: ${cliente1.calcularIMC()}`);
console.log(`El IMC de ${cliente2.nombre} es: ${cliente2.calcularIMC()}`);
console.log(`El IMC de ${cliente3.nombre} es: ${cliente3.calcularIMC()}`);
console.log("--------------------------------------------------");

//EJERCICIO #2
//Conversiones de temperatura
class Temperatura{
    valor: number;
    escala: string;

    constructor(_valor: number, _escala: string){
        this.valor = _valor;
        this.escala = _escala;
    }
    convertirCelsius(): number {
        if(this.escala === "F"){
            return parseFloat(((this.valor - 32) * 5/9).toFixed(2));
        } else if(this.escala === "K"){
            return parseFloat((this.valor - 273.15).toFixed(2));
        } else {
            return this.valor;
        }
    }
    convertirFahrenheit(): number {
        if(this.escala === "C"){
            return parseFloat(((this.valor * 9/5) + 32).toFixed(2));
        } else if(this.escala === "K"){
            return parseFloat(((this.valor - 273.15) * 9/5 + 32).toFixed(2));
        } else {
            return this.valor;
        }
    }
    convertirKelvin(): number {
        if(this.escala === "C"){
            return parseFloat((this.valor + 273.15).toFixed(2));
        } else if(this.escala === "F"){
            return parseFloat(((this.valor - 32) * 5/9 + 273.15).toFixed(2));
        } else {
            return this.valor;
        }
    }
}
let temp1 = new Temperatura(100, "C");
let temp2 = new Temperatura(212, "F");
let temp3 = new Temperatura(373.15, "K");

console.log("------ Ejercicio 2 - Conversiones de Temperatura ------");
console.log(`${temp1.valor}°${temp1.escala} en Fahrenheit es: ${temp1.convertirFahrenheit()}°F`);
console.log(`${temp2.valor}°${temp2.escala} en Celsius es: ${temp2.convertirCelsius()}°C`);
console.log(`${temp3.valor}°${temp3.escala} en Fahrenheit es: ${temp3.convertirFahrenheit()}°F`);
console.log("-------------------------------------------------------");

//EJERCICIO #4
//Registro de estudiantes y sanciones
class Estudiante {
    nombre: string;
    infraccion: number;

    constructor(_nombre: string, _infraccion: number){
        this.nombre = _nombre;
        this.infraccion = _infraccion;
    }
    calcSancion(): string {
        if(this.infraccion === 1){
            return "Sanción por llegada tardía";
        }
        else if(this.infraccion === 2){
            return "Sanción por caminar por los pasillos durante la clase";
        }
        else if (this.infraccion === 3){
            return "Sanción por vestimenta inapropiada";
        }
        else if (this.infraccion === 4){
            return "Sanción por uso inadecuado de instalaciones";
        }
        return "Sin sanción";
    }
    calcMonto(): number {
        if(this.infraccion === 1){
            return 1;
        }
        else if(this.infraccion === 2){
            return 3;
        }
        else if (this.infraccion === 3){
            return 5;
        }
        else if (this.infraccion === 4){
            return 10;
        }
        return 0;
    }
}
let estudiante1 = new Estudiante("Luis Gomez", 1);
let estudiante2 = new Estudiante("Ana Martinez", 3);
let estudiante3 = new Estudiante("Pedro Rodriguez", 4);

console.log("------ Ejercicio 4 - Sanciones para Estudiantes ------");
console.log(`${estudiante1.nombre} tiene: ${estudiante1.calcSancion()} con un monto de $${estudiante1.calcMonto()}`);
console.log(`${estudiante2.nombre} tiene: ${estudiante2.calcSancion()} con un monto de $${estudiante2.calcMonto()}`);
console.log(`${estudiante3.nombre} tiene: ${estudiante3.calcSancion()} con un monto de $${estudiante3.calcMonto()}`);
console.log("-------------------------------------------------------");