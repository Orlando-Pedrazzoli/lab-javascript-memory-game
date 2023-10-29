const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      if (
        !card.classList.contains('turned') &&
        memoryGame.pickedCards.length < 2
      ) {
        // Flip the card
        card.classList.add('turned');

        // Add the card to the picked cards array
        memoryGame.pickedCards.push(card);

        // If two cards are picked, check if they are a pair
        if (memoryGame.pickedCards.length === 2) {
          const [card1, card2] = memoryGame.pickedCards;
          const cardName1 = card1.getAttribute('data-card-name');
          const cardName2 = card2.getAttribute('data-card-name');

          // Check if it's a pair
          const isPair = memoryGame.checkIfPair(cardName1, cardName2);

          // Update the score
          document.getElementById('pairs-clicked').innerText =
            memoryGame.pairsClicked;
          document.getElementById('pairs-guessed').innerText =
            memoryGame.pairsGuessed;

          if (isPair) {
            // If it's a pair, keep the cards face up
            memoryGame.pickedCards = [];
          } else {
            // If it's not a pair, flip the cards back after a short delay
            setTimeout(() => {
              card1.classList.remove('turned');
              card2.classList.remove('turned');
              memoryGame.pickedCards = [];
            }, 1000);
          }

          // Check if the game is finished
          if (memoryGame.checkIfFinished()) {
            alert('Congratulations! You have won the game!');
          }
        }
      }
    });
  });
  console.log(`Card clicked: ${card}`);
});
