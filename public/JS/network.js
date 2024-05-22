function fadeIn(element) {
    const chatIcon = element.querySelector('.chat-icon');
    gsap.to(chatIcon, { 
        duration: 0.5, 
        x: -30, 
        opacity: 1 ,
    });
}

function fadeOut(element) {
    const chatIcon = element.querySelector('.chat-icon');
    gsap.to(chatIcon, { 
        duration: 0.5, 
        x: 0, 
        opacity: 0 
    });
}

function hideConnection(button) {
    const newConnection = button.closest('.new-connection');
    if (newConnection) {
        newConnection.style.display = 'none';
    }
}