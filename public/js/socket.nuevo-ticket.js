// Comando para establecer la conexión
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado al servidor');
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
    console.log(resp.estado);
})

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        console.log('Llega aquí', siguienteTicket);
        label.text(siguienteTicket);

    });

})