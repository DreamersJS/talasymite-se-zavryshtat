16: {
    text: `
    — Чакай сега да видим с какво разполагаме — промърморва Фърчилан и започва да рови из торбата.
    `,
    choices: [
      {
        text: "Ако имаш домат, мини на 78.",
        nextPage: 78,
        requiresItem: { item: "tomato", quantity: 1 },
        removeFromInventory: { item: "tomato", quantity: 1 },
      },
      {
        text: "Ако имаш диня, продължи на 126.",
        nextPage: 126,
        requiresItem: { item: "watermelon", quantity: 1 },
        removeFromInventory: { item: "watermelon", quantity: 1 },
      },
    ],
    moreText:
      "А ако имаш и двете, избери с кое си готов да се разделиш и премини на съответния епизод.",
  },

  requiresItem: { item: "watermelon", quantity: 1 },
  removeFromInventory: { item: "watermelon", quantity: 1 },
  addToInventory: [{ item: "bag", quantity: 1 }, {item: "corn", quantity: 3 }],
  requiresCondition: { condition: "injuredWithFork" },
  changeCondition: { injuredWithFork: true,  healthy: false},
  visitedPages: 8,
  changeSecret: { show: true},

  107: {
    text: `
    Избери продължението — 118 или 160. 
`,
    choices: [
      {
        text: `
        118
        `,
        nextPage: 118,
      },
    ],
  },
