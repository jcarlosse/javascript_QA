//Objetos y funciones

function Car(marca, modelo, color, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
}

//console.log(Car);

var seat = new Car('Seat','Leon', 'Blanco','2021');
var mazda = new Car('Mazda', '3', 'Negro','2019');
var meche = new Car('Mercedez', 'Clase E', 'Negro', '2021');
var ferr = new Car('Ferrari', 'F40', 'Rojo', '1990');

//console.log(seat,mazda,meche,ferr);

function Cliente(nombre, edad, genero,tarjeta, status){
    this.nombre = nombre;
    this.edad = edad; 
    this.genero = genero;
    this.tarjeta = tarjeta; //Visa o mastercard
    this.status = status;  //Activo o inactivo
}

var maria = new cliente('Maria',20 ,'Mujer','Visa','activo');
let fernando = new cliente('Fernando',30, 'Hombre','Mastercard','Inactivo');


//funcion 
function registro(marca, modelo, anio, owner){

    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.owner = owner;    
}

var reg_56 = new registro('Seat','Cupra',2020, maria)

console.log('Registro: ', reg_56);
