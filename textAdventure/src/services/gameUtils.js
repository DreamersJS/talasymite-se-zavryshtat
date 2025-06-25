
function newAddItem(adventureDiary, itemKey, quantity, meta = {}, dBItemsData) {
  if (adventureDiary.bag.hasOwnProperty(itemKey)) {
    adventureDiary.bag[itemKey].quantity += quantity;
  } else {
    const itemData = { ...dBItemsData[itemKey], quantity, ...meta };
    adventureDiary.bag[itemKey] = itemData;
  }
}

function newRemoveItem(adventureDiary, itemKey, quantity) {
  if (!adventureDiary.bag.hasOwnProperty(itemKey)) {
    console.warn(`Item "${itemKey}" not available.`);
    return false;
  }

  const currentQuantity = adventureDiary.bag[itemKey].quantity;

  if (currentQuantity > quantity) {
    adventureDiary.bag[itemKey].quantity -= quantity;
    return true;
  } else if (currentQuantity === quantity) {
    delete adventureDiary.bag[itemKey];
    return true;
  } else {
    console.warn(`Not enough quantity of "${itemKey}". Have: ${currentQuantity}, tried to remove: ${quantity}`);
    return false;
  }
}

function newHasItem(adventureDiary, itemKey, quantity = 1) {
  return (
    adventureDiary.bag.hasOwnProperty(itemKey) &&
    adventureDiary.bag[itemKey].quantity >= quantity
  );
}

function emptyInventory(adventureDiary) {
  adventureDiary.bag = {};
  return adventureDiary.bag;
}
function writeDiaryBagHolder(adventureDiary, chosen) {
  const validCarriers = [
    "Хухавел",
    "Бабаитко",
    "Гадолини",
    "Фърчилан",
    "самият ти",
  ];
  if (validCarriers.includes(chosen)) {
    adventureDiary.bagCarrier = chosen;
  }
}
function readDiaryBagHolder(adventureDiary) {
  return adventureDiary.bagCarrier;
}
function getDiaryCondition(condition, requiredCondition) {
  return condition[requiredCondition];
}
function changeDiaryCondition(adventureDiary, newCondition) {
  adventureDiary.condition = {
    ...adventureDiary.condition,
    ...newCondition,
  };
}
function resetCondition(adventureDiary) {
  adventureDiary.condition = {
    healthy: true,
    sick: false,
    injuredWithFork: false,
    jailed: false,
  };
}

function diaryMushroomProperties() {}

function diarySecret(adventureDiary) {
  return adventureDiary.secret.show
    ? adventureDiary.secret.text
    : "The secret is hidden.";
}

function visitedPagesPush(adventureDiary, currentPage) {
  if (!adventureDiary.visitedPages.includes(currentPage)) {
    adventureDiary.visitedPages.push(currentPage);
  }
}
function visitedPagesCheck(adventureDiary, pageToCheck) {
  return adventureDiary.visitedPages.includes(pageToCheck);
}
export {
  emptyInventory,
  writeDiaryBagHolder,
  readDiaryBagHolder,
  getDiaryCondition,
  changeDiaryCondition,
  resetCondition,
  diaryMushroomProperties,
  diarySecret,
  visitedPagesPush,
  visitedPagesCheck,
  newAddItem,
  newRemoveItem,
  newHasItem,
};
