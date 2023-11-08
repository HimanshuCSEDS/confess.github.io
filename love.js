document.addEventListener('DOMContentLoaded', function () {
    const loveMessageInput = document.getElementById('love-message');
    const sendLoveButton = document.getElementById('send-love');
    const loveMessagesList = document.getElementById('love-messages');

    sendLoveButton.addEventListener('click', function () {
        const message = loveMessageInput.value;
        if (message.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = message;
            loveMessagesList.appendChild(listItem);
            loveMessageInput.value = '';
        }
    });
});
