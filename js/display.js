export const displayCard = (container, card) => {
  const cardDiv = document.createElement("div")
  cardDiv.classList.add("card")

  cardDiv.textContent = `${card.suit} ${card.value}`

  if (card.suit === "♥" || card.suit === "♦") {
    cardDiv.style.color = "red"
  }

  container.appendChild(cardDiv)
}

const resetDisplay = (container) => {
  container.innerHTML = ""
}

export const resetGameDisplay = (containers) => {
  containers.forEach((container) => resetDisplay(container))
}
