function toggleChat() {
    document.getElementById("chat").classList.toggle("active");
}

function sendMessage() {
    const input = document.getElementById("chatInput");
    const messages = document.getElementById("chatMessages");

    if (input.value.trim() !== "") {

        const newMessage = document.createElement("div");
        newMessage.textContent = input.value;
        newMessage.style.padding = "5px";
        newMessage.style.marginBottom = "5px";
        newMessage.style.background = "#f1f1f1";
        newMessage.style.borderRadius = "5px";

        messages.appendChild(newMessage);
        input.value = ""; 
        messages.scrollTop = messages.scrollHeight; 
    }
}
