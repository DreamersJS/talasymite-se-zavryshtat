export const Item = ({ item, quantity, tradeButton }) => {
  const handleTrade = (sellOrBuy) => {
    const quantityToTrade = Number(prompt(`How many ${item}s would you like to remove?`, '1'), 10);
    if (!isNaN(quantityToTrade) && quantityToTrade > 0 && quantityToTrade <= quantity) {
        tradeButton(item, quantityToTrade);
    }
  };

  return (
    <li>
      {item} (x{quantity})
      <button onClick={handleTrade()}>sell/buy</button>
    </li>
  );
};
