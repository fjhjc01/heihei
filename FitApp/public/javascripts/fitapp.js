/**
 * Created by liuye on 10/21/15.
 */
var socket = io.connect('http://localhost');

$(document).ready(function() {
    $('.carousel').carousel();

    $('#btnLogin').click(function() {
        socket.emit('Login', 'Authentication Request');
    });
});