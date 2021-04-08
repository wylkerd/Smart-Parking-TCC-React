const socket = io();

const statusDisplay = document.getElementById('status');

socket.on('status', function (data) {
    console.log(data);
    statusDisplay.innerHTML = data;
})
