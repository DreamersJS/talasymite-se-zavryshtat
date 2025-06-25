import { useEffect, useState } from 'react';
import './Inventory.css';
import { incrementQuantity, decrementQuantity } from '../../services/trade.service';
import { itemsData } from '../../data/itemsData';

export const Inventory = ({ title, inventory, onTrade, tradeAction, prices }) => {
  const [quantities, setQuantities] = useState({});

  const plusOne = (item) => {
    setQuantities(prev => incrementQuantity(item, prev, inventory.bag));
  };

  const minusOne = (item) => {
    setQuantities(prev => decrementQuantity(item, prev));
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
            {/* {item} */}
            <div  className="tooltip-wrapper">

            
<strong>
{itemsData[item].displayName}
</strong>

{
 itemsData[item].description && itemsData[item]?.showDescription !== false && (
<span className='tooltip-text'>
{itemsData[item].description}
</span>
  )
}

            {/* sellable */}
            <>
              {itemsData[item]?.sellable !== false ? (
                <>
                  {/* +- quantity buttons */}
                  <button className='quantity-minus' onClick={() => minusOne(item)} disabled={(quantities[item] || 1) <= 1}></button>
                  (x{quantities[item] || 1})
                  <button className='quantity-plus' onClick={() => plusOne(item)} disabled={(quantities[item] || 1) >= inventory.bag[item].quantity}></button>

                  {/* buy sell actions */}
                  Price: {
                    tradeAction === 'Buy'
                      ? prices[item]?.buy * (quantities[item] || 1)
                      : prices[item]?.sell * (quantities[item] || 1)
                  }
                  <button
                    className="trade-action"
                    onClick={() => onTrade(item, quantities[item] || 1)}
                    disabled={itemsData[item]?.sellable === false}
                  >
                    {tradeAction}
                  </button>
                </>
              ) : <span className="unsellable-note">(Not sellable)</span>
              }
            </>

            </div>
            </li>
        ))}
      </ul>
    </div>
  );
};
