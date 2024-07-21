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
            console.log(`You need a ${choice.requiresItem.item} to choose this option.`);
            return;
        }

        if (choice.requiresCondition && !getDiaryCondition(adventureDiary.condition, choice.requiresCondition.condition)) {
            console.log(`Condition ${choice.requiresCondition.condition} not met to choose this option.`);
            return;
        }

        if (choice.requiresBagCarrier && readDiaryBagHolder(adventureDiary) !== choice.requiresBagCarrier) {
            console.log(`Bag carrier must be ${choice.requiresBagCarrier} to choose this option.`);
            return;
        }

        setCurrentPage(nextPage);

        if (choice.addToInventory) {
            choice.addToInventory.forEach(obj => {
                addItem(adventureDiary, obj.item, obj.quantity);
            });
        }

        if (choice.removeFromInventory) {
            choice.removeFromInventory.forEach(obj => {
                removeItem(adventureDiary, obj);
            });
        }

        if (choice.bagCarrier) {
            writeDiaryBagHolder(adventureDiary, choice.bagCarrier);
        }

        if (choice.changeCondition) {
            changeDiaryCondition(adventureDiary, choice.changeCondition);
        }
    };

    const filteredChoices = pageData.choices.filter(choice => {
        const meetsItemRequirement = !choice.requiresItem || hasItem(adventureDiary.bag, choice.requiresItem);
        const meetsConditionRequirement = !choice.requiresCondition || getDiaryCondition(adventureDiary.condition, choice.requiresCondition.condition);
        const meetsBagCarrierRequirement = !choice.requiresBagCarrier || readDiaryBagHolder(adventureDiary) === choice.requiresBagCarrier;
        return meetsItemRequirement && meetsConditionRequirement && meetsBagCarrierRequirement;
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
        ResetDiary(adventureDiary);
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

