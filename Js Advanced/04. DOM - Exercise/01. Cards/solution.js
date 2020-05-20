function solve() {
   function clickEvent() {
      function compareCards(firstCard, secondCard) {
         let firstPlayerValue = Number(firstCard.name);
         let secondPlayerValue = Number(secondCard.name);

         if (firstPlayerValue > secondPlayerValue) {
            player1Card.style.border = '2px solid green';
            player2Card.style.border = '2px solid red';

         }
         else {
            player2Card.style.border = '2px solid green';
            player1Card.style.border = '2px solid red';
         }

         player1Card = null;
         player2Card = null;

         historyElement.textContent += `[${firstPlayerValue} vs ${secondPlayerValue}] `
      }

      this.src = 'images/whiteCard.jpg';

      if (this.parentNode === player1DivElements) {

         firstPlayerScore.textContent = this.name;
         player1Card = this;
      }
      else if (this.parentNode === player2DivElements) {
         secondPlayerScore.textContent = this.name;

         player2Card = this;
      }

      if (player1Card !== null && player2Card !== null) {
         compareCards(player1Card, player2Card)
      }
   }

   let player1DivElements = document.getElementById('player1Div');
   let player2DivElements = document.getElementById('player2Div');

   let player1CardElements = player1DivElements.getElementsByTagName('img');
   let player2CardElements = player2DivElements.getElementsByTagName('img');

   let resultElement = document.getElementById('result');
   let firstPlayerScore = resultElement.children[0];
   let secondPlayerScore = resultElement.children[2];

   let historyElement = document.getElementById('history');

   let player1Card = null;
   let player2Card = null;

   for (const player1Card of player1CardElements) {
      player1Card.addEventListener('click', clickEvent);
   }

   for (const player2Card of player2CardElements) {
      player2Card.addEventListener('click', clickEvent);
   }
}