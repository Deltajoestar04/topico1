let numeroEntero = 25;
let precioCurso = 69.69;
let nombreCurso = "Programación";
let cursoActivo = true;
let listaDeTemas = ["Variables", "Condicionales", "Bucles", "Funciones", "Objetos"];

class Alumno {
    constructor(nombre, apellido, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
    }


    obtenerNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}
const ModuloAlumnos = (() => {
let alumnosInscritos = [];

function ingresarAlumno(alumno) {
        alumnosInscritos.push(alumno);
        console.log(`Alumno ingresado: ${alumno.obtenerNombreCompleto()}`);
    }

function darDeBajaAlumno(correo) {
        alumnosInscritos = alumnosInscritos.filter(a => a.correo !== correo);
        console.log(`Alumno con correo ${correo} fue dado de baja.`);
    }

function listarAlumnos() {
        console.log("Lista de alumnos inscritos:");
        alumnosInscritos.forEach((a, index) => {
            console.log(`${index + 1}. ${a.obtenerNombreCompleto()} (${a.correo})`);
        });
    }

function enviarCorreoID(alumno) {
        const id = `${alumno.obtenerNombreCompleto()} - ${listaDeTemas[0]}`;
        console.log(`Enviando correo... ID = ${id}`);
    }

return {
        ingresarAlumno,
        darDeBajaAlumno,
        listarAlumnos,
        enviarCorreoID
    };
})();

const alumno1 = new Alumno("Ana", "Pérez", "ana.perez@gmail.com");
const alumno2 = new Alumno("Luis", "García", "luis.garciagemail.com");

ModuloAlumnos.ingresarAlumno(alumno1);
ModuloAlumnos.ingresarAlumno(alumno2);

ModuloAlumnos.listarAlumnos();

ModuloAlumnos.enviarCorreoID(alumno1);

ModuloAlumnos.darDeBajaAlumno("luis.garcia@gmail.com");

ModuloAlumnos.listarAlumnos();
