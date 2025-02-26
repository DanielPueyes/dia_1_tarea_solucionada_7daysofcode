let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguajeProgramacion = prompt("¿Que lenguaje de programación estás estudiando?");

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ¡${lenguajeProgramacion}¡`);

let respuesta = parseInt(prompt(`¿ Te gusta estudiar ${lenguajeProgramacion}?, Responde con el número 1 para SÍ o 2 para NO.`));
if(respuesta == 1){
    alert("¡Muy bien! Sigue estudiando y tendras mucho éxito.");
}if(respuesta == 2){
    alert("Oh, qué pena...¿Ya intentaste aprender otros lenguajes?");

}
