import React, { useState } from 'react';
import Card from '../Card/Card';
import CreateCardModal from '../Modal/Card/CreateCardModal';
import './styles.js';

const Column = ({ title, cards, onAddCard }) => {
  const [localCards, setLocalCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardDescription, setNewCardDescription] = useState('');

  const handleAddCard = () => {
    if (newCardTitle.trim() !== '') {
      const newCard = { id: Date.now(), content: newCardTitle };
      setLocalCards([...localCards, newCard]);
      onAddCard(newCard);
      setNewCardTitle('');
      setNewCardDescription('');
      setIsModalOpen(false);
    }
  };

  const handleDeleteCard = index => {
    const updatedCards = [...localCards];
    updatedCards.splice(index, 1);
    setLocalCards(updatedCards);
  };

  return (
    <div className="column">
      <h3>{title}</h3>
      <div className="card-list">
        {/* Відображення переданих карток */}
        {cards.map(card => (
          <Card key={card.id} content={card.content} />
        ))}
        {/* Відображення локальних карток */}
        {localCards.map((card, index) => (
          <div key={index}>
            <Card content={card.content} />
            <button onClick={() => handleDeleteCard(index)}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={() => setIsModalOpen(true)}>Add Card</button>
      <CreateCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCard={handleAddCard}
        newCardTitle={newCardTitle}
        setNewCardTitle={setNewCardTitle}
        newCardDescription={newCardDescription}
        setNewCardDescription={setNewCardDescription}
      />
    </div>
  );
};

export default Column;
