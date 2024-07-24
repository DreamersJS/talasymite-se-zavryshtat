export const adventureDiary = {
  bag: {},
  gold: 0,
  bagCarrier: "",
  condition: {
    healthy: true,
    sick: false,
    injuredWithFork: false,
    jailed: false,
  },
  mushroomProperties: {
    yellow: { description: "увеличава онзи, който хапне от нея.", show: false },
    blue: { description: "смалява многократно консуматора си.", show: false },
    red: { description: "силно намалява теглото.", show: false },
    green: { description: "увеличава теглото.", show: false },
    black: { description: "невероятно отровна, убива жертвата за броени минути.", show: false },
  },
  secret: {
    show: false,
    text: "Според едно древно предсказание на Дървеняк му е предречено, че ще издъхне моментално, ако го поръси и капка вода.",
  },
  visitedPages: [],

};
