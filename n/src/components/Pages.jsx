import { bookData, inventory, addItem, removeItem, hasItem } from "../data/testPages";

export function Pages() {
  return (
    <div id='text'>
    <p>
      <p>{bookData[page].text}</p>
    </p>
    <div id='choices'>
      {choices.map((choice, index) => { <button onClick={() => showNextPage(choice.nextPage)} key={index}> {choice.text} </button> })}
    </div>
    {bookData[page].moreText && <p>{bookData[page].moreText}</p>}
  </div>
  );
}