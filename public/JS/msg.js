document.getElementById("send-button").addEventListener("click", function () {
    sendMessage("input", "chat-container");
});

document.getElementById("input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage("input", "chat-container");
    }
});

function sendMessage(inputId, messagesId) {
    const chatInput = document.getElementById(inputId);
    const message = chatInput.value;

    if (message.trim() !== "") {
        const chatMessages = document.getElementById(messagesId);

        const newMessage = document.createElement("div");
        newMessage.classList.add("send-msg", "text-end");
        newMessage.innerHTML = `${message}`;

        chatMessages.appendChild(newMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        chatInput.value = "";
    }
}