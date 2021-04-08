const socket = io();

const temperatureDisplay = document.getElementById('temperature');

socket.on('status', function (data) {
    console.log(data);
    status.innerHTML = data;
})
