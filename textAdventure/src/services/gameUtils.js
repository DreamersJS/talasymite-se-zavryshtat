function hasItem(adventureDiary, ...items) {
  const inventory = Object.keys(adventureDiary.bag);
  return items.some(item => inventory.includes(item));
}
function addItem(adventureDiary, ...items) {
  items.forEach(item => {
    if (!adventureDiary.bag[item]) {
      adventureDiary.bag[item] = { quantity: 1 };
    } else {
      adventureDiary.bag[item].quantity += 1;
    }
  });
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

function writeDiaryBagHolder(chosen, adventureDiary) {
  const validCarriers = ["Хухавел", "Бабаитко", "Гадолини", "Фърчилан", "самият ти",];
  if (validCarriers.includes(chosen)) {
    adventureDiary.bagCarrier = chosen;
  }
}
function readDiaryBagHolder(adventureDiary) {
  return adventureDiary.bagCarrier;
}
function getDiaryCondition(adventureDiary) {
  return adventureDiary.condition;
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
  adventureDiary.bag = [];
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
  writeDiaryBagHolder,
  readDiaryBagHolder,
  getDiaryCondition,
  changeDiaryCondition,
  diaryMushroomProperties,
  diarySecret,
  ResetDiary,
};
