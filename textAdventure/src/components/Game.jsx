import React, { useState } from 'react';
// import { bookData } from '../data/test3.js';
import { bookData } from '../data/test4.js';
import {
    hasItem,
    addItem,
    removeItem,
    emptyInventory,
    writeDiaryBagHolder,
    readDiaryBagHolder,
    getDiaryCondition,
    changeDiaryCondition,
    diaryMushroomProperties,
    diarySecret,
    ResetDiary,
} from '../services/gameUtils.js';
import { adventureDiary } from '../adventureDiary.js';

export const Game = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageData = bookData.pages[currentPage];

    console.log('adventureDiary.bag:', adventureDiary.bag);
    console.log('bagCarrier:', adventureDiary.bagCarrier);



    const handleChoice = (nextPage, choice) => {

        if (choice.requiresItem && !hasItem(adventureDiary.bag, choice.requiresItem)) {
            return false;
        }

        setCurrentPage(nextPage);

        if (choice.addToInventory) {
            choice.addToInventory.map(obj => {
                addItem(adventureDiary, obj.item, obj.quantity);
            })
        }
        //
        // if (choice.requiresItem) {
        //     const { item, quantity } = choice.requiresItem;
        //     if (!hasItem(adventureDiary.bag, item) || adventureDiary.bag[item] < quantity) {
        //         return false;
        //     }
        // }
        if (choice.removeFromInventory) {
            choice.removeFromInventory.map(obj => {
                removeItem(adventureDiary, [obj]);
            })
            return adventureDiary.bag;
        }

        if (choice.bagCarrier) {
            writeDiaryBagHolder(adventureDiary, choice.bagCarrier);
        }
        if (choice.requiresBagCarrier && readDiaryBagHolder(adventureDiary) !== choice.requiresBagCarrier) {
            return false;
        }
        // if (choice.requiresBagCarrier) {
        //     readDiaryBagHolder(adventureDiary);
        //     if (choice.text === readDiaryBagHolder(adventureDiary)) {
        //         return readDiaryBagHolder(adventureDiary);
        //     } else {
        //         return false;
        //     }
        // }
    };

    const filteredChoices = pageData.choices.filter(choice => {
         const meetsItemRequirement = !choice.requiresItem || hasItem(adventureDiary.bag, choice.requiresItem);
        // const meetsConditionRequirement = !choice.requiresCondition || getDiaryCondition(adventureDiary.condition, choice.requiresCondition);
         const meetsBagCarrierRequirement = !choice.requiresBagCarrier || readDiaryBagHolder(adventureDiary, choice.requiresBagCarrier);
        return meetsItemRequirement || meetsBagCarrierRequirement;
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
        ResetDiary();
    }

    return (
        <div>
            <p>{pageData.text}</p>
            {filteredChoices.map((choice, index) => (
                <button key={index} onClick={() => handleChoice(choice.nextPage, choice)}>
                    {choice.text}
                </button>
            ))}
            {pageData.moreText && (<p>{pageData.moreText}</p>)}
        </div>
    );
};

