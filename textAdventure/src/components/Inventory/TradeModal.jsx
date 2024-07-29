import { useState } from "react";
import { Inventory } from "./Inventory/Inventory.jsx";
export const TradeModal = (addItem, removeItem, traderInventory, adventureDiary) => {
    const [quantityToTrade, setQuantityToTrade] = useState(1);
     

    return (

        <Modal.Body>
            <p>How many {item.name}s would you like to trade?</p>
            <input
            type="number"
            value={quantityToTrade}
            onChange={e => setQuantityToTrade(e.target.value)}
            />
        </Modal.Body>

    );
    }