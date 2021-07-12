const argv = require('yargs')

    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'This is the base of table of multiply'
    })

    .check((argv, option) => {

        if (isNaN(argv.b))
            throw "The base most be a number";

        return true;
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show the table of multiply on console'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Limit of multiply',
    })
    .check((argv, option) => {
        
        if (isNaN(argv.l) || argv.l <= 0)
            throw 'Limit must be a number greater than cero';
        return true;
    })
    .argv;

module.exports = argv