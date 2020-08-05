const hbs = require('hbs');

hbs.registerHelper('getAño', ()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto)=>{
    let palabras = texto.split(' ');
    palabras.forEach((palabra, indx) => {
        palabras[indx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
})
