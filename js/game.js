import { shuffleDeck } from "./deck.js"
import { displayCard, resetGameDisplay } from "./display.js"


const drawCard = (deck) => {
  return deck.shift()
}

export const initGame = () => {
  const newBtn = document.querySelector("#new-btn")

  const playerContainer = document.querySelector("#player-cards .cards-container")
  const dealerContainer = document.querySelector("#dealer-cards .cards-container")


  newBtn.addEventListener("click", () => {
    const containers = [playerContainer, dealerContainer];

    resetGameDisplay(containers)

    let deck = shuffleDeck()

    const sequence = [playerContainer, dealerContainer, playerContainer, dealerContainer]

    sequence.forEach((container, index) => {
      setTimeout(() => {
        const card = drawCard(deck)
        displayCard(container, card)
      }, 1000 + (index * 1000));
    })
  })
}
