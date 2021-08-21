modeloCarro = ["Tracker", "Corolla", "C3", "Toro"];
tipoCarro = ["SUV", "Sedan", "Hatch", "Picape"];
tipoCombustivel = ["flex", "gasolina", "flex", "Diesel"];
marcaCarro = ["Chevrolet", "Toyota", "Citroen", "FIAT"];
ano = ["2020", "2018", "2015", "2021"]

class Carro {
    constructor(modelo, tipo, combustivel, marca, ano) {
        this.modelo = modelo;
        this.tipo = tipo;
        this.combustivel = combustivel;
        this.marca = marca;
        this.ano = ano;
    }
}

carros = [];
n = modeloCarro.length;
for (i=0; i<n; i++ ) {
    carro = new Carro(modeloCarro[i], tipoCarro[i], tipoCombustivel[i], marcaCarro[i], ano[i])
    carros.push(carro)
}

console.log(carros)