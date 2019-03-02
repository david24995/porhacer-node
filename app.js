const { argv } = require('./config/yargs');

const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

// console.log(argv);

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log('Crear una tarea');
        break;
    case 'listar':
        let listado = getListado();
        if (listado) {
            for (const ob of listado) {
                console.log('============ POR HACER ========'.green);
                console.log(ob.descripcion);
                console.log('Estado: ', ob.completado);
                console.log('=============================='.green);
            }
        } else {
            console.log('No hay datos a mostrar'.red);
        }
        break;
    case 'actualizar':
        let resu = actualizar(argv.descripcion, argv.completado);
        console.log(resu);
        break;
    case 'borrar':
        let resp = borrar(argv.descripcion);
        console.log(resp);
        break;
    default:
        console.log('El comando no éxite');
}