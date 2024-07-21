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
import { adventureDiary } from '../adventureDiary.js';

export const Game = () => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const pageData = bookData.pages[currentPage];
    
    console.log('adventureDiary.bag:', adventureDiary.bag);
    console.log('bagCarrier:', adventureDiary.bagCarrier);



    const handleChoice = (nextPage, choice) => {
        
        if (choice.requiresItem && !hasItem(inventory, choice.requiresItem)) {
            console.log(`You need a ${choice.requiresItem} to choose this option.`);
            return; 
        }

        setCurrentPage(nextPage);
        
        if (choice.addToInventory) {

             choice.addToInventory.map(obj => {
             addItem(adventureDiary, obj.item, obj.quantity);
             })
        }
        if (choice.removeFromInventory) {
            setInventory(inventory.filter(item => item !== choice.removeFromInventory));
        }

        if (choice.requiresCondition) {
            getDiaryCondition(adventureDiary.condition, choice.condition);
        }
        if (choice.changeCondition) {
            changeDiaryCondition(diary.condition, choice.condition);
        }
        // requiresBagCarrier
        if (choice.bagCarrier) {
            writeDiaryBagHolder(adventureDiary, choice.bagCarrier);
        }
        if (choice.requiresBagCarrier) {
            readDiaryBagHolder(adventureDiary);
            if (readDiaryBagHolder(adventureDiary)) {
                return readDiaryBagHolder(adventureDiary);
            }else {
                return false;
            }
        }
    };

    const filteredChoices = pageData.choices.filter(choice => {
        // if (!choice.requiresItem) {
        //     return true;  
        // } 
        // else if (choice.requiresItem) {
        // return hasItem(adventureDiary.bag, choice.requiresItem);  
        // }
        // else if (choice.requiresCondition) {
        //     return getDiaryCondition(adventureDiary.condition, choice.requiresCondition);
        // }
        // else if (choice.requiresBagCarrier) {
        //     return readDiaryBagHolder(adventureDiary);
        // }

        
        const meetsItemRequirement = !choice.requiresItem || hasItem(adventureDiary.bag, choice.requiresItem);
    
        const meetsConditionRequirement = !choice.requiresCondition || getDiaryCondition(adventureDiary.condition, choice.requiresCondition);
    
        const meetsBagCarrierRequirement = !choice.requiresBagCarrier || readDiaryBagHolder(adventureDiary, choice.requiresBagCarrier);
    
        return meetsItemRequirement || meetsConditionRequirement || meetsBagCarrierRequirement;
    
        
        
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
        setInventory({});
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

