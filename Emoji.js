document.addEventListener("DOMContentLoaded", () => {
    const emojiBtn = document.getElementById("emojiBtn");
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");
    const chatContainer = document.getElementById("chat");


    const emojis = ["😃", "😂", "🔥", "💖", "🎉", "👍", "😎", "🤔", "🥳"];


    const stickers = [
        "stikerpack/2025-02-12 10.43.57.jpg",
        "stikerpack/2025-02-13 13.39.21.jpg"
    ];


    const emojiMenu = document.createElement("div");
    emojiMenu.classList.add("emoji-menu");


    emojis.forEach(emoji => {
        const emojiItem = document.createElement("button");
        emojiItem.textContent = emoji;
        emojiItem.classList.add("emoji-item");
        emojiItem.addEventListener("click", () => {
            chatInput.value += emoji; 
        });
        emojiMenu.appendChild(emojiItem);
    });


    stickers.forEach(sticker => {
        const stickerItem = document.createElement("img");
        stickerItem.src = sticker;
        stickerItem.classList.add("sticker-item");
        stickerItem.addEventListener("click", () => {
            sendSticker(sticker); 
        });
        emojiMenu.appendChild(stickerItem);
    });


    chatContainer.appendChild(emojiMenu);


    emojiBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        emojiMenu.classList.toggle("active");
    });


    document.addEventListener("click", (event) => {
        if (!emojiMenu.contains(event.target) && event.target !== emojiBtn) {
            emojiMenu.classList.remove("active");
        }
    });


    function sendSticker(stickerSrc) {
        const newMessage = document.createElement("div");
        newMessage.classList.add("chat-message");

        const stickerImg = document.createElement("img");
        stickerImg.src = stickerSrc;
        stickerImg.classList.add("chat-sticker");

        newMessage.appendChild(stickerImg);
        chatMessages.appendChild(newMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight; 
    }
});
