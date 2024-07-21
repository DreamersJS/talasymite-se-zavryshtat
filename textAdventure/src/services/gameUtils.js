function hasItem(adventureDiary, ...items) {
  if (!adventureDiary || typeof adventureDiary.bag !== 'object') {
    return false;
  }
  const inventory = Object.keys(adventureDiary.bag);
  return items.map(item => inventory.includes(item));
}

function addItem(adventureDiary, item, quantity) {
  if (!adventureDiary || typeof adventureDiary.bag !== 'object') {
    throw new Error('Invalid adventure diary or bag.');
  }
  if (typeof quantity !== 'number' || quantity <= 0) {
    throw new Error('Quantity must be a positive number.');
  }
  if (adventureDiary.bag.hasOwnProperty(item)) {
    adventureDiary.bag[item] += quantity;
  } else {
    adventureDiary.bag[item] = quantity;
  }
}

function removeItem(adventureDiary, quantityToRemove, ...items) {
  items.forEach(item => {
    if (adventureDiary.bag[item]) {
      if (adventureDiary.bag[item].quantity > 1) {
        adventureDiary.bag[item].quantity -= quantityToRemove;
      } else {
        delete adventureDiary.bag[item];
      }
    }
  });
}
function emptyInventory(adventureDiary, inventoryLeftovers) {
  adventureDiary.bag = [];
  if (inventoryLeftovers.length > 0) {
    addItem(adventureDiary, inventoryLeftovers)
  }
  return adventureDiary.bag;
}
function writeDiaryBagHolder(chosen, adventureDiary) {
  const validCarriers = ["Хухавел", "Бабаитко", "Гадолини", "Фърчилан", "самият ти",];
  if (validCarriers.includes(chosen)) {
    adventureDiary.bagCarrier = chosen;
  }
}
function readDiaryBagHolder(adventureDiary) {
  return adventureDiary.bagCarrier;
}
function getDiaryCondition(adventureDiary, con) {
  if (adventureDiary.condition[con] === true) {
    return true;
  }
  return false;
}
function changeDiaryCondition(adventureDiary, newCondition) {
  adventureDiary.condition = {
    ...adventureDiary.condition,
    ...newCondition,
  };
}
function diaryMushroomProperties() {}
function diarySecret(adventureDiary) {
  return adventureDiary.secret.show
    ? adventureDiary.secret.text
    : "The secret is hidden.";
}
function ResetDiary(adventureDiary) {
  adventureDiary.bag = {};
  adventureDiary.bagCarrier = "";
  adventureDiary.condition = {
    healthy: true,
    sick: false,
    injuredWithFork: false,
    jailed: false,
  };
  adventureDiary.mushroomProperties = {
    yellow: { description: "увеличава онзи, който хапне от нея.", show: false },
    blue: { description: "смалява многократно консуматора си.", show: false },
    red: { description: "силно намалява теглото.", show: false },
    green: { description: "увеличава теглото.", show: false },
    black: {
      description: "невероятно отровна, убива жертвата за броени минути.",
      show: false,
    },
  };
  adventureDiary.secret = {
    show: false,
    text: "Според едно древно предсказание на Дървеняк му е предречено, че ще издъхне моментално, ако го поръси и капка вода.",
  };
  adventureDiary.visitedPages = [];
}

export {
  hasItem,
  addItem,
  removeItem,
  emptyInventory,
  writeDiaryBagHolder,
  readDiaryBagHolder,
  getDiaryCondition,
  changeDiaryCondition,
  diaryMushroomProperties,
  diarySecret,
  ResetDiary,
};
