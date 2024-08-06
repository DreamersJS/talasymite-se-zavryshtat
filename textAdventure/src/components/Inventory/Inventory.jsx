import { useState } from 'react';
import './Inventory.css';

export const Inventory = ({ title, inventory, onTrade, tradeAction, prices }) => {
  const [quantities, setQuantities] = useState({});

  const minusOne = (item) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [item]: (prevQuantities[item] || 1) > 1 ? (prevQuantities[item] || 1) - 1 : 1
    }));
  };

  const plusOne = (item) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [item]: (prevQuantities[item] || 1) < inventory.bag[item] ? (prevQuantities[item] || 1) + 1 : inventory.bag[item]
    }));
  };

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        <div>
          Gold: {inventory.gold}
        </div>
        {Object.keys(inventory.bag).map(item => (
          <li key={item}>
            {item} 
            <button className='quantity-minus' onClick={() => minusOne(item)}></button> 
            (x{quantities[item] || 1})  
            <button className='quantity-plus' onClick={() => plusOne(item)}></button>  
            Price: {tradeAction === 'Buy' ? prices[item].buy * (quantities[item] || 1) : prices[item].sell * (quantities[item] || 1)}
            <button className='trade-action' onClick={() => onTrade(item, quantities[item] || 1)}>{tradeAction}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
