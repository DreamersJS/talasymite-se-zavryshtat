import React, { useState } from 'react';
import { bookData } from '../data/test3.js';
import { hasItem } from '../utils/gameUtils.js';

export const Game = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [inventory, setInventory] = useState([]);

    const handleChoice = (nextPage, choice) => {
        
        if (choice.requiresItem && !hasItem(inventory, choice.requiresItem)) {
            console.log(`You need a ${choice.requiresItem} to choose this option.`);
            return; 
        }

        setCurrentPage(nextPage);

        
        if (choice.addToInventory) {
            setInventory([...inventory, choice.addToInventory]);
        }
        if (choice.removeFromInventory) {
            setInventory(inventory.filter(item => item !== choice.removeFromInventory));
        }

    };

    const pageData = bookData.pages[currentPage];
    const filteredChoices = pageData.choices.filter(choice => {
        if (!choice.requiresItem) return true; 
        return hasItem(inventory, choice.requiresItem);  
    });

    if (pageData.end) {
        return (
            <div>
                <p>{pageData.text}</p>
                <button onClick={resetGame}>Play Again</button>
            </div>
        );
    }

    function resetGame() {
        setCurrentPage(1);
        setInventory([]);
    }

    return (
        <div>
            <p>{pageData.text}</p>
            {filteredChoices.map((choice, index) => (
                <button key={index} onClick={() => handleChoice(choice.nextPage, choice)}>
                    {choice.text}
                </button>
            ))}
        </div>
    );
};

