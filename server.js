const express = require('express');
const app = express();
const hbs = require('hbs');
require ('./hbs/helpers');// requiero los Helpers.
const port=process.env.PORT || 3000; //Modificacion para que funcione Heroku, ya que no se que puerto va a enviar.
//MiddleWhere: es un callback que se ejecuta siempre sin importar que peticion le hagan al server.
app.use(express.static(__dirname+'/public')); //Sirvo contenido estatico.
hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine', 'hbs');

 
app.get('/',  (req, res)=> {
  //res.send('Hola Mundo');
  // let salida={
		// 	nombre:'Javier',
		// 	edad:28,
		// 	url:req.url
		// };

		//res.send(salida);//la funcion send automaticamente lo pasa a JSON.
		res.render('home',{
			nombre: 'javier bruzzese'
		});//renderiza el archivo hbs.


});
 
app.get('/data',  (req, res)=> {
  res.send('Hola Data');

});

app.get('/about',  (req, res)=> {
  res.render('about');

});
app.listen(port,()=>{
	console.log(`Escuchando peticiones en el puerto ${port}`);
});