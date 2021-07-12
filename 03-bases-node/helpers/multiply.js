const fs = require('fs');

const createFile = async (base) => {
    
    try {  

    console.log('==============');
    console.log('Table of:', base);
    console.log('==============');

    let output = '';
    for (let i = 1; i < 11; i++) {
        output += `${base} x ${i} = ${base * i}\n`;
    };


        fs.writeFile(`Table-${base}.txt`, output, (err) => {
            if (err) throw err;
        });

        return `File 'Table-${base}' created successfully`;

    } catch (error) {
        console.log("Error");
    }    

};

module.exports = {
    createFile
}