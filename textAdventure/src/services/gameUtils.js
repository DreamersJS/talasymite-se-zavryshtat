function hasItem(inventory, ...items) {
  return items.some((item) => inventory.includes(item));
}
function writeDiaryBag(inventory, adventureDiary) {
  adventureDiary.bag = [...inventory];
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
function getDiaryHealthCondition(adventureDiary) {
  return adventureDiary.healthCondition;
}
function changeDiaryHealthCondition(adventureDiary, newCondition) {
  adventureDiary.healthCondition = {
    ...adventureDiary.healthCondition,
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
  adventureDiary.healthCondition = {
    healthy: true,
    sick: false,
    injuredWithFork: false,
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
  writeDiaryBag,
  writeDiaryBagHolder,
  readDiaryBagHolder,
  getDiaryHealthCondition,
  changeDiaryHealthCondition,
  diaryMushroomProperties,
  diarySecret,
  ResetDiary,
};
