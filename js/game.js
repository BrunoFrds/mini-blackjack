import { shuffleDeck } from "./deck.js"
import { displayCard } from "./display.js"

const drawCard = () => {
  const card = shuffleDeck().shift()
  return card
}

export const initGame = () => {
  const newBtn = document.querySelector("#new-btn")

  const playerContainer = document.querySelector("#player-cards .cards-container")
  const dealerContainer = document.querySelector("#dealer-cards .cards-container")
  newBtn.addEventListener("click", () => {
    const sequence = [playerContainer, dealerContainer, playerContainer, dealerContainer]

    sequence.forEach((container, index) => {
    setTimeout(() => {
      const card = drawCard()
      displayCard(container, card)
    }, 1000 + (index * 1000));
  })
  })
}

