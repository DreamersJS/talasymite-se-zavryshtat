import React, { useEffect, useState } from 'react';
// import { bookData } from '../data/test4.js';
import { bookData } from '../data/bookData.js';
import {
    hasItem,
    addItem,
    removeItem,
    emptyInventory,
    writeDiaryBagHolder,
    readDiaryBagHolder,
    getDiaryCondition,
    changeDiaryCondition,
    resetCondition,
    diaryMushroomProperties,
    diarySecret,
    ResetDiary,
    visitedPagesPush,
    visitedPagesCheck,
} from '../services/gameUtils.js';
import { adventureDiary } from '../adventureDiary.js';

export const Game = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageData = bookData.pages[currentPage];

    console.log('inventory:', adventureDiary.bag);
    // console.log('bag-carrier:', adventureDiary.bagCarrier);
    //  console.log('condition:', adventureDiary.condition);
   // console.log('visitedPages:', adventureDiary.visitedPages);

    const handleChoice = (nextPage, choice) => {
        if (choice.requiresItem && !hasItem(adventureDiary.bag, choice.requiresItem)) {
            return;
        }

        if (choice.requiresCondition && !getDiaryCondition(adventureDiary.condition, choice.requiresCondition.condition)) {
            return;
        }

        if (choice.requiresBagCarrier && readDiaryBagHolder(adventureDiary) !== choice.requiresBagCarrier) {
            return;
        }

        if (choice.visitedPages && !visitedPagesCheck(adventureDiary, choice.visitedPages)) {
            return;
        }

        visitedPagesPush(adventureDiary, currentPage);
        setCurrentPage(nextPage);

        if (choice.addToInventory) {
            choice.addToInventory.forEach(obj => {
                addItem(adventureDiary, obj.item, obj.quantity);
            });
        }

        if (choice.removeFromInventory) {
            removeItem(adventureDiary, choice.removeFromInventory);
        }

        if (choice.bagCarrier) {
            writeDiaryBagHolder(adventureDiary, choice.bagCarrier);
        }

        if (choice.changeCondition) {
            changeDiaryCondition(adventureDiary, choice.changeCondition);
        }


        if (Array.isArray(choice.nextPage)) {
            rollDice(choice.nextPage);
        } else {
            setCurrentPage(choice.nextPage);
        }

    };

    const rollDice = (pages) => {
        const randomIndex = Math.floor(Math.random() * pages.length);
        setCurrentPage(pages[randomIndex]);
    };

    const filteredChoices = pageData.choices.filter(choice => {
        const meetsItemRequirement = !choice.requiresItem || hasItem(adventureDiary.bag, choice.requiresItem);
        const meetsConditionRequirement = !choice.requiresCondition || getDiaryCondition(adventureDiary.condition, choice.requiresCondition.condition);
        const meetsBagCarrierRequirement = !choice.requiresBagCarrier || readDiaryBagHolder(adventureDiary) === choice.requiresBagCarrier;
        const meetsVisitedPagesRequirement = !choice.visitedPages || visitedPagesCheck(adventureDiary, choice.visitedPages);
        return meetsItemRequirement && meetsConditionRequirement && meetsBagCarrierRequirement && meetsVisitedPagesRequirement;
    });

    if (pageData.end) {
        return (
            <div>
                <p>{pageData.text}</p>
                <button onClick={resetGame}>Play Again</button>
            </div>
        );
    }
    useEffect(() => {
        if (pageData.removeFromInventory) {
            pageData.removeFromInventory.forEach(item => {
                removeItem(adventureDiary, item);
            });
        }
        if (pageData.addToInventory) {
            pageData.addToInventory.forEach(obj => {
                addItem(adventureDiary, obj.item, obj.quantity);
            });
        }
        if (pageData.emptyInventory) {
            emptyInventory(adventureDiary);
        }
    }, [pageData]);
    function resetGame() {
        setCurrentPage(1);
        ResetDiary(adventureDiary);
    }

    return (
        <div>
            <h3>{currentPage}</h3>
            <p>{pageData?.text}</p>
            {filteredChoices.map((choice, index) => (
                <button key={index} onClick={() => handleChoice(choice.nextPage, choice)}>
                    {choice.text}
                </button>
            ))}
            {pageData.moreText && (<p>{pageData.moreText}</p>)}
        </div>
    );
};

