import { useState } from 'react'

function CardList() {
  // Use the useState hook to store the list of cards
  const [cards, setCards] = useState([
    { id: 1, text: 'Card 1' },
    { id: 2, text: 'Card 2' },
    { id: 3, text: 'Card 3' },
  ])

  // Function to delete a card
  const handleDelete = (cardId) => {
    // Update the list of cards by removing the card with the given id
    setCards(cards.filter(card => card.id !== cardId))
  }

  return (
    <div>
      {cards.map(card => (
        <div key={card.id}>
          {card.text}
          <button onClick={() => handleDelete(card.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
export default CardList