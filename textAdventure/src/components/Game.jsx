import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { bookData } from '../data/bookData.js';
import {
    emptyInventory,
    writeDiaryBagHolder,
    readDiaryBagHolder,
    getDiaryCondition,
    changeDiaryCondition,
    visitedPagesPush,
    visitedPagesCheck,
    newAddItem,
    newHasItem,
    newRemoveItem,
} from '../services/gameUtils.js';
import { initialAdventureDiary } from '../data/adventureDiary.js';
import { Inventory } from './Inventory/Inventory.jsx';
import './Game.css';
import { traderInventory as initialTraderInventory } from '../data/traderInventory.js';
import { addGold, removeGold } from '../services/trade.service.js';
import { Header } from './Header/Header.jsx';
import { itemsData } from '../data/itemsData.js';


export const Game = () => {
    let { page } = useParams();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(parseInt(page, 10) || 1); // parseInt(page, 10) second arg is decimal sys
    const [openTrade, setOpenTrade] = useState(false);
    const [adventureDiary, setAdventureDiary] = useState({ ...initialAdventureDiary });
    const [traderInventory, setTraderInventory] = useState({ ...initialTraderInventory });
    const pageData = bookData.pages[currentPage];
    const [activeInventory, setActiveInventory] = useState('npc'); // or 'player'


    useEffect(() => {
        if (page) {
            setCurrentPage(parseInt(page, 10));
        }
    }, [page]);

    useEffect(() => {
        if (adventureDiary) {
            console.log(adventureDiary);
        }
    }, [adventureDiary]);

    useEffect(() => {
        navigate(`/game/${currentPage}`, { replace: true });
    }, [currentPage, navigate]);

    useEffect(() => {
        if (currentPage !== 1 && !visitedPagesCheck(adventureDiary, currentPage)) {
            let updated = false;

            if (pageData.removeFromInventory) {
                const itemsToRemove = Array.isArray(pageData.removeFromInventory)
                    ? pageData.removeFromInventory
                    : [pageData.removeFromInventory];

                itemsToRemove.forEach(item => {
                    newRemoveItem(adventureDiary, item.item, item.quantity);
                });

                updated = true;
            }

            if (pageData.addToInventory) {
                pageData.addToInventory.forEach(obj => {
                    // addItem(adventureDiary, obj.item, obj.quantity);
                    newAddItem(adventureDiary, obj.item, obj.quantity, {}, itemsData);
                });
                updated = true;
            }

            if (pageData.emptyInventory) {
                emptyInventory(adventureDiary);
                updated = true;
            }

            if (updated) {
                visitedPagesPush(adventureDiary, currentPage); // mark the page as visited
                setAdventureDiary({ ...adventureDiary });
            }
        }
    }, [currentPage, pageData, adventureDiary]);

    const handleChoice = (nextPage, choice) => {
        if (choice.requireItem && !newHasItem(adventureDiary, choice.requireItem.item, choice.requireItem.quantity)) {
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
                // addItem(adventureDiary, obj.item, obj.quantity);
                newAddItem(adventureDiary, obj.item, obj.quantity, {}, itemsData);
            });
            setAdventureDiary({ ...adventureDiary });
        }
        if (choice.removeFromInventory) {
            // removeItem(adventureDiary, choice.removeFromInventory);
            const itemsToRemove = Array.isArray(choice.removeFromInventory)
                ? choice.removeFromInventory
                : [choice.removeFromInventory];

            itemsToRemove.forEach(item => {
                newRemoveItem(adventureDiary, item.item, item.quantity);
            });
            // newRemoveItem(adventureDiary, choice.removeFromInventory.item, choice.removeFromInventory.quantity);
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

    if (pageData.end) {
        return (
            <div>
                <p>{pageData.text}</p>
                <button onClick={resetGame}>Play Again</button>
            </div>
        );
    }
    const filteredChoices = pageData?.choices.filter(choice => {
        // const meetsItemRequirement = !choice.requireItem || hasItem(adventureDiary.bag, choice.requireItem);
        const meetsItemRequirement = !choice.requireItem || newHasItem(adventureDiary, choice.requireItem.item, choice.requireItem.quantity);
        const meetsConditionRequirement = !choice.requiresCondition || getDiaryCondition(adventureDiary.condition, choice.requiresCondition.condition);
        const meetsBagCarrierRequirement = !choice.requiresBagCarrier || readDiaryBagHolder(adventureDiary) === choice.requiresBagCarrier;
        const meetsVisitedPagesRequirement = !choice.visitedPages || visitedPagesCheck(adventureDiary, choice.visitedPages);
        return meetsItemRequirement && meetsConditionRequirement && meetsBagCarrierRequirement && meetsVisitedPagesRequirement;
    });

    const toggleModal = () => {
        setOpenTrade(prev => !prev);
    };

    function resetGame() {
        const freshDiary = JSON.parse(JSON.stringify(initialAdventureDiary));
        setAdventureDiary(freshDiary);
        setCurrentPage(1);
        navigate(`/game/1`);
    }


    const handleTrade = (item, quantity) => {
        const isBuying = !adventureDiary.bag.hasOwnProperty(item);
        const price = isBuying ? traderInventory.prices[item].buy : traderInventory.prices[item].sell;
        const totalCost = price * quantity;

        if (isBuying) {
            if (adventureDiary.gold >= totalCost) {
                removeGold(adventureDiary, totalCost);
                // addItem(adventureDiary, item, quantity);
                newAddItem(adventureDiary, item, quantity, {}, itemsData);
                // removeItem(traderInventory, { item, quantity });
                newRemoveItem(traderInventory, item, quantity);
                addGold(traderInventory, totalCost);
            } else {
                console.log("Not enough gold to buy");
            }
        } else {
            if (newHasItem(adventureDiary, item, quantity)) {
                addGold(adventureDiary, totalCost);
                newRemoveItem(adventureDiary, item, quantity);
                newAddItem(traderInventory, item, quantity, {}, itemsData);
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
            <Header></Header>
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
  {/* Toggle buttons visible only on small screens */}
  <div className="inventory-toggle-buttons">
    <button onClick={() => setActiveInventory('npc')} className={activeInventory === 'npc' ? 'active' : ''}>NPC</button>
    <button onClick={() => setActiveInventory('player')} className={activeInventory === 'player' ? 'active' : ''}>Player</button>
  </div>

  <div className="inventory-wrapper">
    {/* Always show both on large screens */}
    <div className={`inventory npc-inventory ${activeInventory === 'npc' ? 'active' : ''}`}>
      <Inventory
        title="NPC Inventory"
        inventory={traderInventory}
        onTrade={handleTrade}
        tradeAction="Buy"
        prices={traderInventory.prices}
      />
    </div>
    <div className={`inventory player-inventory ${activeInventory === 'player' ? 'active' : ''}`}>
      <Inventory
        title="Player Inventory"
        inventory={adventureDiary}
        onTrade={handleTrade}
        tradeAction="Sell"
        prices={traderInventory.prices}
      />
    </div>
  </div>
</div>

                </div>
            )}
        </div>
    );
};
