const { env, port } = require('./config/index');

// todo: llamando servidor de http
const http = require('http');
const server = http.createServer(); // ? creando servidor


server.on('request', (req, res) => {

    if(req.method === "POST" && req.url=="/datos" ){
        // todo: Regresar al momento de ver Streams
    }



    res.statusCode = 200;
    res.end('Ejecutando servidor sin Express');
})



console.log(port);


server.listen(port);
console.log(`Servidor corriendo en ${env} en el puerto ${port}`);
console.log('Servidor funcionando en http://localhost:'+port); 




// console.log(env);






