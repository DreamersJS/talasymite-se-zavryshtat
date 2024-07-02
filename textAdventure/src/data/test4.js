export const bookData = {
    pages: {
      1: {
        text: `Нещо не е наред...
          Да, нещо не е наред — усещаш го още преди да си се събудил напълно. Сякаш вместо върху познатия сламеник в горската си колиба сега лежиш някъде другаде. Но това е невъзможно, казваш си ти. Как бих могъл да се пренеса на друго място? По вълшебство ли?
    
          И отваряш очи.
          
          В следващия миг скачаш от разхвърляното легло и се оглеждаш смаяно. Този път предчувствието не те е излъгало. Наистина си попаднал другаде — в някаква непозната схлупена колиба с едно-единствено зацапано прозорче, през което едва се процеждат утринните лъчи.
          
          Що за дяволия? Как си се озовал тук?`,
        choices: [
          {
            text: "Почесваш се озадачено по тила, после излизаш от колибата и попадаш на 85. ",
            nextPage: 5,
            addItemToInventory: [{ item: "bag", quantity: 1 }, {item: "corn", quantity: 3 }, { item: "watermelon", quantity: 1 }, {item: "tomato", quantity: 2 }, { item: "beetroot", quantity: 1 }, {item: "pipe", quantity: 1 }, {item: "soap", quantity: 1 }],
          },
        ],
      },
      2: {
        text: `— Чакай сега да видим с какво разполагаме — промърморва Гадолини и започва да рови из торбата.`,
        choices: [
          {
            text: "Ако имаш стоножка в бурканче, мини на 113. ",
            nextPage: 113,
            requiresItem: { item: "centipede", quantity: 1 },
          },
          {
            text: "Ако имаш лула на мира, продължи на 159. ",
            nextPage: 11,
            requiresItem: { item: "pipe", quantity: 1 },
            removeFromInventory: { item: "pipe", quantity: 1 },
          },
          {
            text: "Ако имаш царевица, прехвърли се на 192. ",
            nextPage: 4,
            requiresItem: { item: "corn", quantity: 1 },
            removeFromInventory: { item: "corn", quantity: 1 },
          },
          {
            text: "Ако нямаш нищо от изброеното, попадаш на 203. ",
            nextPage: 4,
          },
        ].filter((choice) => choice.nextPage !== null),
        moreText:
          "А ако имаш два или три от тези предмети, избери с кой си готов да се разделиш и премини на съответния епизод.",
      },
      3: {
        text: `— Кой носи торбата?`,
        choices: [
            { text: "Хухавел — прехвърли се на 15. ", nextPage: 15, requresBagCarrier: "Хухавел"},
            { text: "Бабаитко — прехвърли се на 16. ", nextPage: 2, requresBagCarrier: "Бабаитко"},
            { text: "Фърчилан — прехвърли се на 17. ", nextPage: 4, requresBagCarrier: "Фърчилан"},
            { text: "Гадолини — прехвърли се на 13. ", nextPage: 13, requresBagCarrier: "Гадолини"},
            { text: "Самият ти — прехвърли се на 18. ", nextPage: 8, requresBagCarrier: "самият ти"},
        ],
        },
      4: {
        text: `— Бях огнедишащ, обаче вече не съм — въздъхва змеят. — Остарях, изнемощях… На, гледай!
          
          Той разтваря широко грамадната си паст и почва да съска като кипнал чайник, но въпреки всички усилия от гърлото му излитат само две-три облачета пушек.
          
          — А пък бях страшен звяр — тъжно клати глава змеят. — Ако ме видят сега, за смях ще стана. Затуй съм се заврял под земята — да не ми гледат срама.
          
          — Това е защото не гледаш научно на нещата! — упреква го Хухавел и се обръща към теб. — Шефе, дай една царевица!`,
        choices: [
          {
            text: "Ако имаш царевица и се съгласиш да я дадеш на Хухавел, мини на 23. ",
            requiresItem: { item: "corn", quantity: 1 },
            removeFromInventory: { item: "corn", quantity: 1 },
            nextPage: 7,
          },
          { text: "В противен случай продължи на 15. ", nextPage: 15 },
        ].filter((choice) => choice.nextPage !== null),
      },
      5: {
        text: `— Кой ще носи торбата?`,
        choices: [
            { text: "Хухавел ", nextPage: 3,  bagCarrier: "Хухавел"},
            { text: "Бабаитко", nextPage: 3,   bagCarrier: "Бабаитко"},
            { text: "Фърчилан ", nextPage: 3,  bagCarrier: "Фърчилан"},
            { text: "Гадолини ", nextPage: 3,   bagCarrier: "Гадолини"},
            { text: "Самият ти ", nextPage: 3,   bagCarrier: "самият ти"},
        ],
        
        },
      6: {
        text: `Имал ли си нещастието преди малко да бъдеш ранен с вилица в ръката?`,
        choices: [
          {
            text: "Да — мини на 230. ",
            nextPage: 230,
            requiresCondition: { condition: "injuredWithFork" },
          },
          {
            text: "Не — продължи на 284. ",
            nextPage: 284,
            requiresCondition: { condition: "healthy" },
          },
        ].filter((choice) => choice.nextPage !== null),
      },
      7: {
        text: `Минавал ли си вече по този път?`,
        choices: [
          { text: "Да — продължи на 33. ", nextPage: 33, visitedPages: 8 },
          { text: "Не — прехвърли се на 8. ", nextPage: 8 },
        ].filter((choice) => choice.nextPage !== null),
      },
      8: {
        text: `Изненеада! `,
        choices: [
          {
            text: "Ранен с вилица, мини на 6. ",
            changeCondition: { condition: "injuredWithFork" },
            nextPage: 6,
          },
          {
            text: "Неуспешна атака от таласъм, мини на 6. ",
            nextPage: 6,
          },
        ],
      },
      10: {
        text: `О, любезний читателю! С това свое решение ти показа, че наистина в гърдите ти бие сърце на чукундурт. Не ще и дума, очаква те трудна, но славна съдба. Тепърва ще бъдеш оплюван всекидневно от целокупния чукундуртски народ. Ако издържиш на изпитанията достатъчно дълго, подир време току-виж си станал министър на простите работи. Но така или иначе това вече е съвсем друга история. Твоето приключение привършва дотук.`,
        choices: [],
        end: true,
      },
      11: {
        text: `Добре, но как да му помогнеш? Сега е моментът да провериш с какво разполагаш.`,
        choices: [
          {
            text: "Ако имаш чифт вехти панталони и искаш да ги дадеш на Мишемориус, мини на 34. ",
            nextPage: 34,
            requiresItem: "oldPants",
            removeFromInventory: { item: "oldPants", quantity: 1 },
          },
          {
            text: "Ако имаш шишенце с универсален разтворител и го използваш, за да отлепиш панталоните му от стола, продължи на 48. ",
            nextPage: 48,
            requiresItem: "bottleOfSolvent",
            removeFromInventory: { item: "bottleOfSolvent", quantity: 1 },
          },
          {
            text: "А ако нямаш нито едното, нито другото, прехвърли се на 87. ",
            nextPage: 1,
          },
        ].filter((choice) => choice.nextPage !== null),
      },
  
  
      // throw dice ???
      13: {
        text: `— Хвърляй царевицата, шефе! — отчаяно се провиква Гадолини.
          Разбираш гениалната му идея и незабавно хвърляш царевицата на стъпалата, сетне продължаваш да бягаш надолу.
          Колко кочана царевица си хвърлил? `,
        choices: [
          {
            text: "Един — мини по свой избор на 217, 227 или 242.",
            nextPage: [3, 4, 8],
            requiresItem: { item: "corn", quantity: 1 },
            removeFromInventory: { item: "corn", quantity: 1 },
          },
          {
            text: "Два — продължи на 206 или 259.",
            nextPage: [1, 2],
            requiresItem: { item: "corn", quantity: 2 },
            removeFromInventory: { item: "corn", quantity: 2 },
          },
          {
            text: "Три — прехвърли се на 250.",
            nextPage: 25,
            requiresItem: { item: "corn", quantity: 3 },
            removeFromInventory: { item: "corn", quantity: 3 },
          },
        ].filter((choice) => choice.nextPage !== null),
      },
  
  
  
  
  

      15: {
        text: `Щом отваряш торбата, отвътре добродушно те поглежда патката на Хухавел.
  
          — Къш, птицо проклета! — крясваш ти, после се обръщаш към чукундуртите и свирепо питаш: — Какво търси тук това животно?
  
          — Не е животно, а птица, сам го каза преди малко — поправя те Хухавел. — Турнах я вътре, щото иначе е много неудобно. Нали разбираш, шефе, патката под мишница и торбата на другото рамо. Хич не върви, значи.
  
          Да, но се оказва, че патката не разбира от дисциплина. Изкълвала е двата домата и тъкмо се готви да начене царевицата.
  
          — И най-умният чукундурт пак си остава чукундурт — въздъхваш ти. — Стига толкова! Отсега нататък аз ще нося торбата.`,
        choices: [
          {
            text: "Отбележи си загубата на двата домата и премини на 138.",
            nextPage: 16,
            removeFromInventory: { item: "tomato", quantity: 2 },
          },
        ],
      },
      16: {
        text: `— Чакай сега да видим с какво разполагаме — промърморва Фърчилан и започва да рови из торбата.`,
        choices: [
          {
            text: "Ако имаш домат, мини на 78.",
            nextPage: 78,
            requiresItem: { item: "tomato", quantity: 1 },
            removeFromInventory: { item: "tomato", quantity: 1 },
          },
          {
            text: "Ако имаш диня, продължи на 18.",
            nextPage: 18,
            requiresItem: { item: "watermelon", quantity: 1 },
            removeFromInventory: { item: "watermelon", quantity: 1 },
          },
          {
            text: "Ако нямаш нищо от изброеното, попадаш на 21.",
            nextPage: 21,
          },
        ],
        moreText:
          "А ако имаш и двете, избери с кое си готов да се разделиш и премини на съответния епизод.",
      },
      18: {
        text: `След доста усилия импровизираната манерка е готова.`,
        choices: [
          {
            text: "Отбележи си, че нямаш вече диня и премини на 25.",
            nextPage: 25,
            removeFromInventory: { item: "watermelon", quantity: 1 },
          },
        ],
      },
      21: {
        text: `Когато се свестяваш, лежиш в тясна килия, а около теб седят унило четиримата чукундурти. Попадал ли си вече в затвора?`,
        choices: [
          {
            text: "Да — мини на 10.",
            nextPage: 10,
            requiresCondition: "jailed",
          },
          { text: "Не — продължи на 7.", nextPage: 7 },
        ],
      },
      25: {
        text: `
              Когато огледалцето му казва, че е най-красив на земята, таласъмът изпада във възторг. Без повече да ви обръща внимание, той се отдръпва настрани с безценната придобивка.  
              `,
        choices: [
          {
            text: "Напълваш съдинката си с вода и преминаваш на 177. ",
            addItemToInventory: [{ item: "water", quantity: 1 }],
            nextPage: 177,
          },
        ],
      },
    },
  };
  




  40: {
    text: `
    Спирате за кратка почивка на мястото, където се сливат левият и средният път. Накъде ще продължиш сега? 
     `,
    choices: [
      {
        text: `
        Напред, където би трябвало да е замъкът на таласъмите — мини на 157. 
        `,
        nextPage: 157,
      },
      {
        text: `
        Обратно по средния път — продължи на 141. 
        `,
        nextPage: 141,
      },
    ].filter((choice) => choice.nextPage !== null),
  },


requiresItem: { item: "corn", quantity: 1 },
addItemToInventory: [{ item: "water", quantity: 1 }],
removeFromInventory: { item: "corn", quantity: 1 },
 changeCondition: { condition: "injuredWithFork" },
 requiresCondition: { condition: "healthy" },

 inventoryLeftovers: [{ item: "duck", quantity: 1 }, { item: "pipe", quantity: 1 }],