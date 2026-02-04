/**
 * Retourne la valeur d'une carte
 * @param {{ suit: string, value: string }} card
 * @returns {number}
 */
const getCardValue = (card) => {
  if (card.value === "A") {
    return 11
  } else if (["K", "Q", "J"].includes(card.value)) {
    return 10
  } else {
    return Number(card.value)
  }
}

/**
 * Calcule le score d'une main de blackjack
 * @param {{ suit: string, value: string }[]} hand
 * @returns {number}
 */
export const calculateScore = (hand) => {
  let score = 0

  hand.forEach((card) => {
    score += getCardValue(card)
  })

  return score
}
