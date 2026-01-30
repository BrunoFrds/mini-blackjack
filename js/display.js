/**
 * Affiche une carte dans un container DOM
 * @param {HTMLElement} container - Élément HTML dans lequel ajouter la carte
 * @param {{ suit: string, value: string }} card - Carte à afficher
 */
export const displayCard = (container, card) => {
  const cardDiv = document.createElement("div")
  cardDiv.classList.add("card")

  cardDiv.textContent = `${card.suit} ${card.value}`

  if (card.suit === "♥" || card.suit === "♦") {
    cardDiv.style.color = "red"
  }

  container.appendChild(cardDiv)
}

/**
 * Réinitialise l'affichage d'un container
 * @param {HTMLElement} container - Élément HTML à réinitialiser
 */
const resetDisplay = (container) => {
  container.innerHTML = ""
}

/**
 * Réinitialise l'affichage de plusieurs containers - Liste des éléments DOM à vider
 * @param {HTMLElement[]} containers
 */
export const resetGameDisplay = (containers) => {
  containers.forEach((container) => resetDisplay(container))
}
