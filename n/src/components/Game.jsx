import React, { useEffect, useState } from 'react';
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

    };

    const pageData = bookData.pages[currentPage];

    return (
        <div>
            <p>{pageData.text}</p>
            {pageData.choices.map((choice, index) => (
                <button key={index} onClick={() => handleChoice(choice.nextPage, choice)}>
                    {choice.text}
                </button>
            ))}
        </div>
    );
};

