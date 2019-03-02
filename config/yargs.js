const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción  de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un Tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea determinada', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};