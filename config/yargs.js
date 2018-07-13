const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicas', opts)
    .command('crear', 'Crea un arvivo con la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}