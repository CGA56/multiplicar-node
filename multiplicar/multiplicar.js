// Required libreria propia de node para crear archivos
const fs = require('fs');
const colors = require('colors');

// tipos de require
// Libreria no  propia de node
// const fs = require('express');
//Propios
// const fs = require('./PAHT');


let crearArchivos = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = '';
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero.`);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            data += `${base}*${i}=${base*i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else;
            // console.log(`El archivo tabla-${base}.txt a sido creado!`);
            resolve(`tabla-${base}.txt`.red);
        });
    });
}


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor introductido ${base} no es numero.`);
        }
        // if (!Number(limite)) {
        //     reject(`El valor introductido ${limite} no es numero.`);
        // }
        console.log('========================================'.green);
        console.log(`===========Tabla de ${base}=============`.green);
        console.log('========================================'.green);
        for (let i = 0; i <= limite; i++) {
            // data += `${base}*${limite}=${base*limite}\n`;
            console.log(`${base}*${i}=${base*i}\n`);
        }

        // fs.writeFile(`tablas\tabla-${base}.txt`, data, (err) => {
        //     if (err) reject(err)
        //     else
        //         resolve(`tabla-${base}.txt`);
        // });
    });




}
module.exports = {
    crearArchivos,
    listarTabla
}