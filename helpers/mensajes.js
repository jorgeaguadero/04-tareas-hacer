const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {

    
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`Seleccione una opción: `, (opt)=> {
            readline.close()
            resolve(opt)
        })

    })

   

}

const pausa = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

    readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt)=> {
        readline.close()
        resolve()
    }) 
    })
   
}

module.exports = {
    mostrarMenu,
    pausa

}