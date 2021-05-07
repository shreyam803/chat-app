const socket = io();

const form = document.querySelector('#messageForm');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const message = e.target.elements.message.value;       

    socket.emit('sendMessage',message);
})

socket.on('message',(message)=>{
    console.log(message);
})