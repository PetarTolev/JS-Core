function solve() {
   function send() {
      let inputMessageContent = chatInputField.value;

      if (inputMessageContent !== "") {
       
      let message = document.createElement('div');
      let messageAtribute = document.createAttribute('class');
      messageAtribute.value = 'message my-message';
      message.setAttributeNode(messageAtribute);

      message.textContent = inputMessageContent;

      messagesField.appendChild(message);

      chatInputField.value = null;  
      }
   }
   let messagesField = document.getElementById('chat_messages');
   let chatInputField = document.getElementById('chat_input');
   let sentButtonElement = document.getElementById('send');

   sentButtonElement.addEventListener('click', send);
}