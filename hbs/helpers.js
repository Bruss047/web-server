const hbs = require('hbs');

//Helpers
hbs.registerHelper('getAnio', ()=>{//funcion que se dispara cuando el template lo requiere.
	return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto)=>{//funcion que se dispara cuando el template lo requiere.
	let palabras=texto.split(' ');

	palabras.forEach((palabra,idx)=>{
		palabras[idx]=palabra.charAt(0).toUpperCase()+palabra.slice(1).toLowerCase();
	});
	return palabras.join(' ');
});