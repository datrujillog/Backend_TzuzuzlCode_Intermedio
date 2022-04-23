const EventEmitter = require('events');

const emitter = new EventEmitter();

class Payment extends EventEmitter {
    pay(callback) {
        console.log('Iniciando pago...');
        this.emit('inicio');

        callback();
    }
}

const payment = new Payment()

//TODO: Escuchando el evento inicio
payment.on('inicio', () => {
    console.log('Realizando Pago...');
})



// TODO: Escuchando el evento completado
payment.on('completado', () => {
    console.log('Pago realizado... Gracias');
    console.log('Pago finalizado');
})



// TODO: callback
payment.pay(() => {
    return setTimeout(() => {
        console.log('Listo! Gracias por su pago');
        payment.emit('completado');
    }, 500);
})


