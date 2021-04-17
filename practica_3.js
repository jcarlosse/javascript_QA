//Condicionantes

var txt;
var r = "Presiona el boton";

if(r == "Presiona el boton!"){
    txt = "test pass";
}else{
    txt = "test fail";
}

console.log(txt);

//Otro ejercicio

var num2 = 42;
 if(num2 ==42){
    console.log('El número correcto es: ', num2)
}
 console.log(3*4);

 // Otro ejemplo


 var foo = 1;
 var bar = 2;
 var moo = 3;

 if(foo < bar && moo > bar){
    console.log("foo is smaller than bar AND moo is larger de bar.")    
 }

 if(foo < bar || moo > bar){
    console.log("foo is smaller than bar OR  moo is larger de bar.")    
 }

 // Otro ejemplo

 var boleano = false;

 if(!boleano){

    console.log("Test fail");
 }else{
     console.log("Test pass")
 }