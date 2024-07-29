import React, { useEffect, useState } from 'react';
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
import { Inventory } from './Inventory/Inventory.jsx';
import './Game.css';
import { traderInventory } from '../traderInventory.js';
import { canAfford, addGold, removeGold } from '../services/trade.service.js';

export const Game = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [openTrade, setOpenTrade] = useState(false);
    const pageData = bookData.pages[currentPage];

    console.log('inventory:', adventureDiary.bag);
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
    const toggleModal = () => {
        setOpenTrade(prev => !prev);
    };

    const handleTrade = (item, isBuying, quantity) => {
        const price = isBuying ? traderInventory.prices[item].buy : traderInventory.prices[item].sell;
        if (isBuying) {
          // Buying logic: Player buys from NPC
          if (adventureDiary.bag.gold >= price * quantity) {
            adventureDiary.bag.gold -= price * quantity;
            addItem(adventureDiary, item, quantity);
          }
        } else {
          // Selling logic: Player sells to NPC
          if (hasItem(adventureDiary.bag, item, quantity)) {
            adventureDiary.bag.gold += price * quantity;
            removeItem(adventureDiary, item, quantity);
          }
        }
      };
    //   addItem(adventureDiary, 'gold', 10);
    //   addItem(adventureDiary, 'pipe', 1);

    return (
        <div className="game" >
            <h3>{currentPage}</h3>
            <p>{pageData?.text}</p>
            {filteredChoices.map((choice, index) => (
                <button key={index} onClick={() => handleChoice(choice.nextPage, choice)}>
                    {choice.text}
                </button>
            ))}
            {pageData.moreText && (<p>{pageData.moreText}</p>)}

            <div>
                <button onClick={toggleModal}>TRADE</button>
            </div>
            {openTrade && (
                <div className="trade">
                    <button className="trade" onClick={toggleModal}>close</button>
                    <div className="inventories">
                        <Inventory title="NPC Inventory" inventory={traderInventory} onTrade={(item) => handleTrade(item, true)} tradeAction="Buy" prices={traderInventory.prices} />
                        <Inventory title="Player Inventory" inventory={adventureDiary} onTrade={(item) => handleTrade(item, false)} tradeAction="Sell" prices={traderInventory.prices} />
                    </div>
                </div>
            )}
        </div>
    );
};

