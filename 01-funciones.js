//*tipos de funciones
//https://dev.to/victordeandres/funciones-en-javascript-7-formas-de-declarar-una-funcion-523a
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
//https://www.jasoft.org/Blog/post/Escribiendo-codigo-JavaScript-limpio-funciones-anonimas-auto-ejecutables

//! función "clásica": declarativa
function saludar(name) {
  console.log("hola " + name);
}
saludar("Pam");

//! funcion expresión: a mitad de camino entre declarativa y flecha
const clima = function temp(grados) {
  console.log("hoy hace " + grados + "º");
};
//la llamamos usando el nombre de la variable, no de la función
clima(16);

//! la podemos hacer anónima:
const juguetes = function (cantidad) {
  console.log("tengo " + cantidad + " osos de peluche");
};
juguetes(5);

//! flecha, nuestra vieja amiga:
const hervir = (litros) => {
  console.log("hay que hervir " + litros + " para los fideos");
};
hervir(2);

//! iife: immediately invoqued function expression:
//ojo! si no le ponen el punto y coma a lo anterior... la iife se le pega y hace lío
//es descartable. Se declara sin nombre y se ejecuta en el momento, y después chau

(function () {
  console.log("hola nucba");
})();

//! iife con param:
(function (user) {
  console.log("hola", user);
})("Pam");
