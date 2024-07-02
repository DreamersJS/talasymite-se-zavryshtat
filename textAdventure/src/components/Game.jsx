import React, { useState } from 'react';
// import { bookData } from '../data/test3.js';
import { bookData } from '../data/test4.js';
import { hasItem,
    addItem,
    removeItem,
    emptyInventory,
    writeDiaryBagHolder,
    readDiaryBagHolder,
    getDiaryCondition,
    changeDiaryCondition,
    diaryMushroomProperties,
    diarySecret,
    ResetDiary, } from '../services/gameUtils.js';

export const Game = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [inventory, setInventory] = useState([]);
    const [diary, setDiary] = useState({
        bagCarrier: "",
        condition: {},
        secret: {
            show: false,
            text: "This is a secret.",
        },
    });
    const pageData = bookData.pages[currentPage];
    

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

        if (choice.requiresCondition) {
            getDiaryCondition(diary.condition, choice.condition);
        }
        if (choice.changeCondition) {
            changeDiaryCondition(diary.condition, choice.condition);
        }
        // requresBagCarrier
        if (choice.bagCarrier) {
            writeDiaryBagHolder(diary.bagCarrier, choice.bagCarrier);
        }
        if (choice.requresBagCarrier) {
            readDiaryBagHolder(diary.bagCarrier);
        }
    };

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

