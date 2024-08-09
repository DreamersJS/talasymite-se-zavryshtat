import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
    visitedPagesPush,
    visitedPagesCheck,
    ResetDiary
} from '../services/gameUtils.js';
import { adventureDiary as initialAdventureDiary } from '../adventureDiary.js';
import { Inventory } from './Inventory/Inventory.jsx';
import './Game.css';
import { traderInventory as initialTraderInventory } from '../traderInventory.js';
import { addGold, removeGold } from '../services/trade.service.js';

export const Game = () => {
    const { page } = useParams(); 
    const navigate = useNavigate(); 
    const [currentPage, setCurrentPage] = useState(parseInt(page, 10) || 1); // parseInt(page, 10) second arg is decimal sys
    const [openTrade, setOpenTrade] = useState(false);
    const [adventureDiary, setAdventureDiary] = useState({ ...initialAdventureDiary });
    const [traderInventory, setTraderInventory] = useState({ ...initialTraderInventory });
    const pageData = bookData.pages[currentPage];

    useEffect(() => {
        if (page) {
            setCurrentPage(parseInt(page, 10));
        }
    }, [page]);

    useEffect(() => {
        navigate(`/game/${currentPage}`, { replace: true });
    }, [currentPage, navigate]);

    useEffect(() => {
        if (currentPage !== 1) {
            if (pageData.removeFromInventory) {
                pageData.removeFromInventory.forEach(item => {
                    removeItem(adventureDiary, item);
                });
                setAdventureDiary({ ...adventureDiary });
            }
            if (pageData.addToInventory) {
                pageData.addToInventory.forEach(obj => {
                    addItem(adventureDiary, obj.item, obj.quantity);
                });
                setAdventureDiary({ ...adventureDiary });
            }
            if (pageData.emptyInventory) {
                emptyInventory(adventureDiary);
                setAdventureDiary({ ...adventureDiary });
            }
        }
    }, [currentPage, pageData, adventureDiary]);

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
            setAdventureDiary({ ...adventureDiary });
        }
        if (choice.removeFromInventory) {
            removeItem(adventureDiary, choice.removeFromInventory);
            setAdventureDiary({ ...adventureDiary });
        }
        if (choice.bagCarrier) {
            writeDiaryBagHolder(adventureDiary, choice.bagCarrier);
            setAdventureDiary({ ...adventureDiary });
        }
        if (choice.changeCondition) {
            changeDiaryCondition(adventureDiary, choice.changeCondition);
            setAdventureDiary({ ...adventureDiary });
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

    const toggleModal = () => {
        setOpenTrade(prev => !prev);
    };

    function resetGame() {
        setCurrentPage(1);
        navigate(`/game/1`); 
        ResetDiary(adventureDiary);
        setAdventureDiary({ ...initialAdventureDiary });
    }

    const handleTrade = (item, quantity) => {
        const isBuying = !adventureDiary.bag.hasOwnProperty(item);
        const price = isBuying ? traderInventory.prices[item].buy : traderInventory.prices[item].sell;
        const totalCost = price * quantity;

        if (isBuying) {
            if (adventureDiary.gold >= totalCost) {
                removeGold(adventureDiary, totalCost);
                addItem(adventureDiary, item, quantity);
                removeItem(traderInventory, { item, quantity });
                addGold(traderInventory, totalCost);
            } else {
                console.log("Not enough gold to buy");
            }
        } else {
            if (hasItem(adventureDiary.bag, { item, quantity })) {
                addGold(adventureDiary, totalCost);
                removeItem(adventureDiary, { item, quantity });
                addItem(traderInventory, item, quantity);
                removeGold(traderInventory, totalCost);
            } else {
                console.log("Not enough item to sell");
            }
        }

        setAdventureDiary({ ...adventureDiary });
        setTraderInventory({ ...traderInventory });
    };

    return (
        <div className="game">
            <h3>{currentPage}</h3>
            <p>{pageData?.text}</p>
            {filteredChoices.map((choice, index) => (
                <button key={index} onClick={() => handleChoice(choice.nextPage, choice)}>
                    {choice.text}
                </button>
            ))}
            {pageData.moreText && (<p>{pageData.moreText}</p>)}

            {pageData.trade && (
                <div>
                    <button onClick={toggleModal}>TRADE</button>
                </div>
            )}
            {openTrade && (
                <div className="trade">
                    <button className="close" onClick={toggleModal}>close</button>
                    <div className="inventories">
                        <Inventory title="NPC Inventory" inventory={traderInventory} onTrade={(item, quantity) => handleTrade(item, quantity)} tradeAction="Buy" prices={traderInventory.prices} />
                        <Inventory title="Player Inventory" inventory={adventureDiary} onTrade={(item, quantity) => handleTrade(item, quantity)} tradeAction="Sell" prices={traderInventory.prices} />
                    </div>
                </div>
            )}
        </div>
    );
};
