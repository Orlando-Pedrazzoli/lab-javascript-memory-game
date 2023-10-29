class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }

    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap the elements at indices i and j
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++; // Increment the total number of pairs clicked

    // Compare the cards to check if they are the same
    if (card1 === card2) {
      this.pairsGuessed++; // Increment the number of pairs guessed
      return true; // Cards are the same
    } else {
      return false; // Cards are not the same
    }
  }

  checkIfFinished() {
    // Get the total number of pairs in the game (assuming each card has a unique name)
    const totalPairs = this.cards.length / 2;

    // Check if the number of pairs guessed is equal to the total number of pairs
    return this.pairsGuessed === totalPairs;
  }
}
