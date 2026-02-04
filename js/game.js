import { shuffleDeck } from "./deck.js"
import { displayCard, resetGameDisplay, scoreDisplay } from "./display.js"
import { calculateScore } from "./score.js"

/**
 *
 * @param {{ suit: string, value: string }[]} deck - Deck de cartes mélangé
 * @returns {{ suit: string, value: string } | undefined} Carte tirée ou undefined si le deck est vide
*/
const drawCard = (deck) => {
  return deck.shift()
}

const playerContainer = document.querySelector("#player-cards .cards-container")
const dealerContainer = document.querySelector("#dealer-cards .cards-container")

const scorePlayerContainer = document.querySelector("#player-score")
const scoreDealerContainer = document.querySelector("#dealer-score")

const hitBtn = document.querySelector("#hit-btn")
const standBtn = document.querySelector("#stand-btn")

const gameState = {
  deck: [],
  playerHand: [],
  dealerHand: []
}

/**
 * Initialise une nouvelle partie de blackjack
 * Gère le reset de l'affichage, la création du deck
 * et la distribution initiale des cartes
*/
export const initGame = () => {
  const newBtn = document.querySelector("#new-btn")

  const containers = [playerContainer, dealerContainer]
  const sequence = [playerContainer, dealerContainer, playerContainer, dealerContainer]

  newBtn.addEventListener("click", () => {
    resetGameDisplay(containers)

    scoreDisplay(scorePlayerContainer, 0)
    scoreDisplay(scoreDealerContainer, 0)

    hitBtn.disabled = false

    gameState.deck = shuffleDeck()
    gameState.playerHand = []
    gameState.dealerHand = []

    sequence.forEach((container, index) => {
      setTimeout(() => {
        const card = drawCard(gameState.deck)
        displayCard(container, card)
        if (container === playerContainer) {
          gameState.playerHand.push(card)
          scoreDisplay(scorePlayerContainer, calculateScore(gameState.playerHand))
        } else {
          gameState.dealerHand.push(card)
          scoreDisplay(scoreDealerContainer, calculateScore(gameState.dealerHand))
        }
      }, 1000 + index * 1000);
    })
  })
}

export const hitCard = () => {
  hitBtn.addEventListener("click", () => {
    const card = drawCard(gameState.deck)
    displayCard(playerContainer, card)
    gameState.playerHand.push(card)
    scoreDisplay(scorePlayerContainer, calculateScore(gameState.playerHand))
  })
}

export const standGame = () => {
  standBtn.addEventListener("click", () => {
    hitBtn.disabled = true

    dealerTurn()
  })
}

const dealerTurn = () => {
  if (calculateScore(gameState.dealerHand) < 17) {
    setTimeout(() => {
      const card = drawCard(gameState.deck)
      displayCard(dealerContainer, card)
      gameState.dealerHand.push(card)
      scoreDisplay(scoreDealerContainer, calculateScore(gameState.dealerHand))
    }, 1000)
  }
}
