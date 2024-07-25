function hasItem(bag, requiresItem) {
  return bag[requiresItem.item] >= requiresItem.quantity;
}
function addItem(adventureDiary, item, quantity) {
  if (adventureDiary.bag.hasOwnProperty(item)) {
    adventureDiary.bag[item] += quantity;
  } else {
    adventureDiary.bag[item] = quantity;
  }
}
function removeItem(adventureDiary, removeFromInventory) {
  const { item, quantity } = removeFromInventory;
  if (adventureDiary.bag.hasOwnProperty(item)) {
    if (adventureDiary.bag[item] > quantity) {
      adventureDiary.bag[item] -= quantity;
    } else {
      delete adventureDiary.bag[item];
    }
  }
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

function ResetDiary(adventureDiary) {
  adventureDiary.bag = {};
  (adventureDiary.gold = 0), (adventureDiary.bagCarrier = "");
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

function visitedPagesPush(adventureDiary, currentPage) {
  if (!adventureDiary.visitedPages.includes(currentPage)) {
    adventureDiary.visitedPages.push(currentPage);
  }
}
function visitedPagesCheck(adventureDiary, pageToCheck) {
  return adventureDiary.visitedPages.includes(pageToCheck);
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
  resetCondition,
  diaryMushroomProperties,
  diarySecret,
  ResetDiary,
  visitedPagesPush,
  visitedPagesCheck,
};
