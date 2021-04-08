const socket = io();

const statusDisplay = document.getElementById('status');

var spots = new Array();

socket.on('status', function (data) {
    console.log(data);
    spots = data;
    statusDisplay.innerHTML = spots.toString();
})
