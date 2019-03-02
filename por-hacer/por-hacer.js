const fs = require('fs');
const path = require('path');
const colors = require('colors');

let datos = [];

const guardarDB = () => {

    let data = JSON.stringify(datos);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            console.log('No se guardo correctamente los datos'.red);
        } else {
            console.log('Se agrego correctamente los datos'.green);
        }
    });

}

const cargarDB = () => {

    try {
        datos = require('../db/data.json');
    } catch (error) {
        datos = [];
    }

}


const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    datos.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return datos;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let buscar = datos.findIndex(da => da.descripcion === descripcion);

    if (buscar >= 0) {
        datos[buscar].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();

    let nuevaData = datos.filter(da => da.descripcion !== descripcion);

    if (datos.length === nuevaData.length) {
        return false;
    } else {
        datos = nuevaData;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}