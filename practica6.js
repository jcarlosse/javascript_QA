var myCar = new Object();

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

//console.log(myCar);

//Otra forma de declarar el objeto myCar

varMiCoche = {make : 'Ford', model : 'Mustang', year: 1969}

myCar.year = 1970;
//console.log(myCar,varMiCoche);

//Tipos de propiedades en un objeto

var elObjeto = new Object(), 
    str = 'miString',
    rand = Math.random(),
    obj = Object(),
    bol = true;

//console.log(elObjeto, str, rand, obj, bol);

elObjeto.type = 'Sintaxis de puntos';
elObjeto["constructor"] = 'Cadena con espacios';
elObjeto[str] = 'Usando variable de cadena';
elObjeto[rand] = 'Usando un número aleatorio';
elObjeto[obj] = 'Inseption con objetos';
elObjeto[''] = 'Usando una propiedad vacia';
elObjeto[bol] = 'Usando una propiedad boleana';

console.log(elObjeto);

//Iteracion con un solo for
for (var propiedad in elObjeto){

    if(elObjeto.hasOwnProperty(propiedad)){

        console.log("La propiedad " + propiedad + ' del objeto es '+ elObjeto[propiedad])
    }
}


//iteracion con una funcion
function showProp (obj, objName){

    var result = '';
    for (var i in obj){
        if(obj.hasOwnProperty(i)){
            result += `${objName}.${i} = ${obj[i]}\n`;// acento invertido 

        }
    }

    return result;
}

console.log(showProp(elObjeto, 'el objeto'));
console.log(showProp(myCar, 'my Car'));
console.log(showProp(varMiCoche, 'Micoche'));