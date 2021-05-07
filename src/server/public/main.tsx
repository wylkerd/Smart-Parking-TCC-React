const socket = io();

const statusDisplay1 = document.getElementById('status1');
const statusDisplay2 = document.getElementById('status2');
const statusDisplay3 = document.getElementById('status3');
const statusDisplay4 = document.getElementById('status4');
const statusDisplay5 = document.getElementById('status5');
const statusDisplay6 = document.getElementById('status6');
const statusDisplay7 = document.getElementById('status7');

var spots = new Array(7);

socket.on('status', function (data) {
    console.log(data);
    spots = data;
    statusDisplay1.innerHTML = spots[0].toString();
    statusDisplay2.innerHTML = spots[1].toString();
    statusDisplay3.innerHTML = spots[2].toString();
    statusDisplay4.innerHTML = spots[3].toString();
    statusDisplay5.innerHTML = spots[4].toString();
    // statusDisplay6.innerHTML = spots[5].toString();
    statusDisplay6.innerHTML = "Vaga livre";
    statusDisplay7.innerHTML = spots[6].toString();
})
