//Objetos

var myObj = {};
var myArr = [];

var persona = {
    nombre :"Juan Carlos",
    apellido: "Suárez"    
}

persona.edad = 60;
persona["Salario"] = 100000;

console.log(persona.apellido);
console.log(myObj.caja);
console.log(myArr[0]);

for(var miembro in persona){
    if(persona.hasOwnProperty(miembro)) {
        console.log("El " +miembro + ' de la persona es '+persona[miembro])
    }
    console.log(miembro);
}

// Declarar constantes

var msPerDay = 24*60*60*1000;

console.log(msPerDay);

const julio172014 = new Date (msPerDay + (44 +365 + 11 + 197));
const otroDia = new Date (2019,11,24,0,0,0,0);

console.log(julio172014)

 const options = {year: '2-digit',month: '2-digit', day:'2-digit', hour: '2-digit', minute: '2-digit', timeZoneName: 'short'};

 const date_real = new Intl.DateTimeFormat ('en-US',options).format;

 console.log(date_real(julio172014))
 console.log(date_real(otroDia));