const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, show = false, limit = 10) => {
    
    try {  

    let output = '';
    for (let i = 1; i <= limit; i++) {
        output += `${base} ${'x'} ${i} ${'='} ${base * i}\n`;
    };


        fs.writeFile(`./outputs/Table-${base}.txt`, output, (err) => {
            if (err) throw err;
        });

        if (show) {
            console.log('=============='.green);
            console.log('Table of:'.green, base);
            console.log('=============='.green);
            console.log(output);
        }
    
        return `File 'Table-${base}' created successfully`.rainbow;

    } catch (error) {
        console.log("Error");
    }    

};

module.exports = {
    createFile
}