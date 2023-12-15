function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var chatBox = document.getElementById('chat-box');

    if (messageInput.value !== '') {
        var message = document.createElement('div');
        message.innerText = 'You: ' + messageInput.value;
        chatBox.appendChild(message);
        messageInput.value = '';
    }
}
