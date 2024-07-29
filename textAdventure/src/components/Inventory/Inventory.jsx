import { useState } from 'react';
export const Inventory = ({ title, inventory, onTrade, tradeAction, prices }) => {
  const [quantityToTrade, setQuantityToTrade] = useState(1);

  const minusOne = () => {
    if (quantityToTrade <= 1) {
      return;
    }
    setQuantityToTrade(prev => prev - 1);
  }
  const plusOne = (item) => {
    if ( quantityToTrade >= inventory.bag[item]) {
      return;
    }
    setQuantityToTrade(prev => prev + 1);
  }

  return (
    <div>
      <h3>{title}</h3>
      <ul>
          <div>
          Gold: {inventory.gold}
          </div>
        {Object.keys(inventory.bag).map(item => (
          <li key={item}>
            {item} <button onClick={() => { minusOne() }}>-</button> (x{quantityToTrade})  <button onClick={() => { plusOne(item) }}>+</button>  Price: {tradeAction === 'Buy' ? prices[item].buy * quantityToTrade : prices[item].sell * quantityToTrade }
            <button onClick={() => onTrade(item, quantityToTrade)}>{tradeAction}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
