let edad=25;
console.log(edad);//resultado = 25
edad=30;
console.log(edad);//resultado = 30
const nombre="Ana";
console.log(nombre);//resultado = Ana
/*nombre="carmen";
console.log(nombre);*/

//arrow function
function sumar(a,b){//formato tradicional

    return a+b;
}

let resultado=sumar(5,23);//resultado = 
console.log('Resultado de la suma= ${resultado}');

const sumarflecha = (a,b) =>{ return a+b;}//formato flecha

let resultadosumaflecha=sumarflecha(5,23);//resultado = 28
console.log('Resultado de la suma flecha= ${resultadosumaflecha}');

const sumareducida = (a,b) => a+b;//formato flecha reducido

let resultadosumareducida=sumareducida(5,23);

console.log('Resultado de la suma reducida= ${resultadosumareducida}');


console.log(texto);
let texto = `
<p>
nombre: ${nombre} 

</p>
tiene una edad de: ${edad} 

`;
console.log(texto);


const usuarios = [
    user="leo",
    edad=21,
    semeste=7,
    carrera="ISW"
];

const {user,semeste,carrera}=usuarios;

console.log('${user} esta en el semestre ${semeste} de la carrera ${carrera}');

const colores = ['rojo','verde','azul'];

const {c1,c2,c3}=colores;
console.log(c1,c2,c3);

//modulos
import { PI, restar, dividir } from "./mates";
console.log('El valor de PI es: ${PI}');
console.log('La resta de 10-5 es: ${restar(10,5)}');
console.log('La division de 10/5 es: ${dividir(10,5)}');

class animal{
    constructor(nombre){
        this.nombre=nombre;
    }
    hablar(){
        console.log('<${this.nombre} hace ruido>');

    }
}

class perro extends animal{
    hablar(){
        console.log('<${this.nombre} ladra');
    }
}

const firulais = new perro('firulais');
firulais.hablar();


//ejercicio practico
/*declarar almenos 5 vatiables diferentes valores pueden ser enteros, doubles, strings,objetos, arreglos
clear un modulo para demostrar el ingreso de alumnos a un curso y poder darlos de baja.
crear una clase alumno integada en el mundo de ingreso de alumnos.
enviar correo ID = nombre completo- topico1
*/



