
  function hasItem(inventory, ...items) {
    return items.some(item => inventory.includes(item));
}
function diaryBag(){

};
function writeDiaryBagHolder(chosen){
  if (chosen === "Хухавел") {
    adventureDiary.bagCarrier = "Хухавел";
    
  }else if (chosen === "Бабаитко") {
    adventureDiary.bagCarrier = "Бабаитко";

  }else if (chosen === "Гадолини") {
    adventureDiary.bagCarrier = "Гадолини";

  }else if (chosen === "Фърчилан") {
    adventureDiary.bagCarrier = "Фърчилан";

  }else if (chosen === "самият ти") {
    adventureDiary.bagCarrier = "самият ти";

  }
}
function readDiaryBagHolder(){
  
}
function diaryHealthCondition(){
  
}
function diaryMushroomProperties(){
  
}
function diarySecret(){
  
}
function ResetDiary(){
  adventureDiary.bag = [];
  adventureDiary.bagCarrier = "";
  adventureDiary.healthCondition = {
    healthy: true,
    sick: false,
    injuredWithFork: false,
  };
  adventureDiary.mushroomProperties = {
    yellow: 'увеличава онзи, който хапне от нея.', show: false,
    blue: 'смалява многократно консуматора си.', show: false,
    red: 'силно намалява теглото.', show: false,
    green: 'увеличава теглото.', show: false,
    black: 'невероятно отровна, убива жертвата за броени минути.', show: false,
  };
  adventureDiary.secret = {
    show: false,
    text: "Според едно древно предсказание на Дървеняк му е предречено, че ще издъхне моментално, ако го поръси и капка вода.",
  };
}
export { hasItem, diaryBag, diaryBagHolder, diaryHealthCondition, diaryMushroomProperties, diarySecret, ResetDiary}