//  LLamar al archivo yargs
const argv = require('./config/yargs').argv;

// Colors console

const colors = require('colors');

// En consola  node app listar -b 5

// Required libreria propia de node para crear archivos
const fs = require('fs');
// Destructuracion
const { crearArchivos, listarTabla } = require('./multiplicar/multiplicar');
// tipos de require
// Libreria no  propia de node
// const fs = require('express');
//Propios
// const fs = require('./PAHT');




// let base = 5;
// let data = '';
// for (let i = 1; i < 11; i++) {
//     data += `${base}*${i}=${base*i}\n`;

// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt a sido creado!`);
// });

// let base = 'ab';



// console.log(argv.base);
// console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then((archivo) => console.log(`El listado de la tabla ${argv.base} es :`))
            .catch(err => {
                console.log(err);
            })
        break;
    case 'crear':
        console.log('Crear');
        crearArchivos(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo}`))
            .catch(err => {
                console.log(err);
            })
        break;
    default:
        console.log('El comando ingresado no es valido');

}


// let parametro = argv[2];
// let base = parametro.split("=")[1];

// crearArchivo(base)
//     .then((archivo) => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => {
//         console.log(err);
//     })