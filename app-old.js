const http=require('http');

http.createServer((req,res)=>{

	res.writeHead(200,{'Content-Type': 'application/json'});

		let salida={
			nombre:'Javier',
			edad:28,
			url:req.url
		}

		res.write(JSON.stringify(salida));

	res.write('hola mundo');
	res.end();//Avisa que ya terminamos de enviar la respuesta.

})
.listen(8080);

console.log('Escuchando puerto 8080');