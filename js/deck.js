const createDeck = () => {
  const suits = ["♠", "♥", "♦", "♣"]
  const values = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"]

  const deck = []
  suits.forEach((suit) => {
    values.forEach((value) => {
      deck.push({suit, value})
    })
  })
  return deck
}

export const shuffleDeck = () => {
  let deckArray = createDeck()
  for (let i = deckArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let swap = deckArray[i]
    deckArray[i] = deckArray[j]
    deckArray[j] = swap
  }
  return deckArray
}
