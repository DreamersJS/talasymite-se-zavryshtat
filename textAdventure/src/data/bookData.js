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
          nextPage: 85,
        },
      ],
    },
    2: {
      text: `— Чакай сега да видим с какво разполагаме — промърморва Гадолини и започва да рови из торбата.`,
      choices: [
        { text: "Ако имаш стоножка в бурканче, мини на 113. ", nextPage: 113, requiresItem: 'centipede' },
        { text: "Ако имаш лула на мира, продължи на 159. ", nextPage: 159, requiresItem: 'pipe' },
        { text: "Ако имаш царевица, прехвърли се на 192. ", nextPage: 192, requiresItem: 'corn' },
        { text: "Ако нямаш нищо от изброеното, попадаш на 203. ", nextPage: 203 },
      ].filter(choice => choice.nextPage !== null),
      moreText: "А ако имаш два или три от тези предмети, избери с кой си готов да се разделиш и премини на съответния епизод."
    },
    3: {
      text: `— Абе, ще ни излапат с парцалите, като не се вслушвате в гласа на разума — мърмори Хухавел и с усилие гази напред.

        А наоколо главите на блатните таласъми идват все по-близо. Внезапно един от тях отваря уста и изрича с квакащ глас:
        
        — Какви сте вие, добри хора, и по каква работа минавате през нашето блато?
        
        Какво ще му отговориш? `,
      choices: [
        { text: "Че сте търговци — мини на 20.  ", nextPage: 20 },
        { text: "Че сте мирни пътници — продължи на 35. ", nextPage: 35 },
        {
          text: "Че сте отряд командоси, тръгнали на тайна акция срещу таласъмите на Дървеняк Първи — попадаш на 50. ",
          nextPage: 50,
        },
        { text: "Че не е тяхна работа — прехвърли се на 66. ", nextPage: 66 },
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
          requiresItem: 'corn',
          nextPage: 23,
        },
        { text: "В противен случай продължи на 45. ", nextPage: 45 },
      ].filter(choice => choice.nextPage !== null), 
    },
    5: {
      text: `— Тишина! — извикваш ти. — След като сте ме избрали за външен министър, чуйте какво ще ви кажа. Сатанинските планове на Дървеняк не бива да се осъществят в никакъв случай. И с това ще се заема лично аз. Още утре потеглям към новия замък на таласъмите. Искам в ранни зори насред селото да се явят всички доброволци за участие в тази опасна, но почетна мисия.
        
        Чукундуртите изревават възторжено.
        
        — Жална им майка на таласъмите! — коментира някой до теб. — Ще се оталасъмчат набързо.
        
        Друг перва министър-предателя по главата.
        
        — Видя ли бе? Това се казва министър, а не предател като тебе. Ако не беше той, как щяхме да разкрием плановете на Дървеняк?
        
        През целия следобед настроението в селото е тържествено. Чукундуртите те разнасят на ръце и пеят революционни песни. Привечер предлагат да те настанят като скъп гост в най-хубавата колиба. Обещават дори да ти осигурят течаща вода и централно отопление.
        
        Силно си изненадан, че в това село има такива модерни удобства, но какво ли не може да се очаква от чукундуртите. Решавай сега каква колиба ще избереш.`,
      choices: [
        {
          text: "С течаща вода и централно отопление — мини на 26. ",
          nextPage: 26,
        },
        { text: "Само с течаща вода — продължи на 58. ", nextPage: 58 },
        { text: "Само с централно отопление — попадаш на 91. ", nextPage: 91 },
        { text: "Без такива глезотии — прехвърли се на 109. ", nextPage: 109 },
      ],
    },








    6: {
      text: `Имал ли си нещастието преди малко да бъдеш ранен с вилица в ръката?`,
      choices: [
        { text: "Да — мини на 230. ", nextPage: 230, requiresCondition: 'injuredWithFork' }, 
        { text: "Не — продължи на 284. ", nextPage: 284, requiresCondition: 'healthy' },
      ].filter(choice => choice.nextPage !== null),
    },
    7: {
      text: `Минавал ли си вече по този път?`,
      choices: [
        { text: "Да — продължи на 33. ", nextPage: 33, requiresCondition: 'visited' },
        { text: "Не — прехвърли се на 8. ", nextPage: 8,},
      ].filter(choice => choice.nextPage !== null),
    },






    8: {
      text: `Без колебание повеждаш дружината си по лявото разклонение. Може и да са прави чукундуртите — все пак гъбената чорбица е хубаво нещо. Скоро пътят започва постепенно да завива надясно и навлиза в рядка горичка.
        
        — По такива места растат най-хубавите гъби — развълнувано обявява Бабаитко. — Пък и камъкът сигурно не лъжеше. Слушай, шефе, дай да потърсим. Тя работата, няма да избяга.`,
      choices: [
        {
          text: "Ако се съгласиш да потърсите гъби, мини на 24. ",
          nextPage: 24,
        },
        {
          text: "Ако не искаш да губиш време за подобни глупости, продължи на 49. ",
          nextPage: 49,
        },
      ],
    },
    9: {
      text: `— Аман от суха вода! — ядосва се таласъмът и запокитва шишенцето в кладенеца. — Вие подигравате ли ми се? Марш веднага оттук! Никаква вода за вас!
        
        — Дай да му опаля един, бе шефе! — моли се Бабаитко.`,
      choices: [
        { text: "Ако му разрешиш да го стори, мини на 208. ", nextPage: 208 },
        {
          text: "Ако се откажеш от водата и продължиш пътешествието, мини на 177. ",
          nextPage: 177,
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
          requiresItem: 'oldPants'
        },
        {
          text: "Ако имаш шишенце с универсален разтворител и го използваш, за да отлепиш панталоните му от стола, продължи на 48. ",
          nextPage: 48,
          requiresItem: 'bottleOfSolvent'
        },
        {
          text: "А ако нямаш нито едното, нито другото, прехвърли се на 87. ",
          nextPage: 87,
        },
      ],
    },
    12: {
      text: `Щом отхапваш парченце от жълтата гъба, по цялото ти тяло пробягва непоносим сърбеж и виждаш как короните на дърветата стремително падат насреща ти. Не! Дърветата са неподвижни, но самият ти си израснал невероятно, тъй че сега главата ти се подава над върхарите им.
        
        — Леле, шефе! — уплашено подвиква Фърчилан. — Какво стана? Ами че в тоя вид хич не ставаш за тайна мисия! Ще те зърнат отдалече.
        Уви, Фърчилан е прав. Ще трябва да се откажеш от приключението… освен ако рискуваш още веднъж да опиташ някоя от вълшебните гъби. Друга възможност просто нямаш. Коя от гъбите ще избереш? `,
      choices: [
        { text: "Синя — продължи на 57. ", nextPage: 57 },
        { text: "Червена — попадаш на 29. ", nextPage: 29 },
        { text: "Зелена — прехвърли се на 200. ", nextPage: 200 },
        { text: "Черна — отгърни на 53. ", nextPage: 53 },
      ],
    },






    //  for that one the inventory must be object with keys and values, not array
    13: {
      text: `— Хвърляй царевицата, шефе! — отчаяно се провиква Гадолини.

        Разбираш гениалната му идея и незабавно хвърляш царевицата на стъпалата, сетне продължаваш да бягаш надолу.
        Колко кочана царевица си хвърлил? `,
      choices: [
        {
          text: "Един — мини по свой избор на 217, 227 или 242.",
          nextPage: [217, 227, 242],
          requiresItem: { item: 'corn', quantity: 1},
          removeFromInventory: { item: 'corn', quantity: 1}
        },
        { text: "Два — продължи на 206 или 259.",
          nextPage: [206, 259],
          requiresItem: { item: 'corn', quantity: 2},
          removeFromInventory: { item: 'corn', quantity: 2}
         },
        { text: "Три — прехвърли се на 250.", nextPage: 250, requiresItem: { item: 'corn', quantity: 3},removeFromInventory: { item: 'corn', quantity: 3} },
      ],
    },







    
    14: {
      text: `Не, това блато никак не ти се нрави. Повеждаш обратно дружината си и един час по-късно наближавате… всъщност какво наближавате?`,
      choices: [
        { text: "Кръстопътя — мини на 75.", nextPage: 75 },
        {
          text: "Сливането на левия и средния път — продължи на 40.",
          nextPage: 40,
        },
      ],
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
          nextPage: 138,
          removeFromInventory: { item: 'tomato', quantity: 2},
        },
      ],
    },
    16: {
      text: `— Чакай сега да видим с какво разполагаме — промърморва Фърчилан и започва да рови из торбата.`,
      choices: [
        { text: "Ако имаш домат, мини на 78.",
         nextPage: 78,
          requiresItem: { item: 'tomato', quantity: 1},
          removeFromInventory: { item: 'tomato', quantity: 1}
         },
        { text: "Ако имаш диня, продължи на 126.",
          nextPage: 126,
          requiresItem: { item: 'melon', quantity: 1},
          removeFromInventory: { item: 'melon', quantity: 1}
         },
        {
          text: "Ако нямаш нищо от изброеното, попадаш на 203.",
          nextPage: 203,
        },
      ],
      moreText:
        "А ако имаш и двете, избери с кое си готов да се разделиш и премини на съответния епизод.",
    },
    17: {
      text: `Щом отхапваш от синята гъба, мигновено те побиват ледени тръпки и сякаш стремително пропадаш надолу. Не! Просто се смаляваш! За броени секунди изчезваш сред тревата.

        След упорито ровене чукундуртите най-сетне те откриват. Бабаитко те поема върху дланта си и укоризнено поклаща глава.

        — Е, каква стана тя, шефе? Май мисията отива към провал, щото в тоя вид не ми е ясно как ще се биеш с таласъмите.

        Уви, Бабаитко е прав. Ще трябва да се откажеш от приключението… освен ако рискуваш още веднъж да опиташ някоя от вълшебните гъби. Друга възможност просто нямаш. Коя от гъбите ще избереш?`,
      choices: [
        { text: "Жълта — продължи на 67.", nextPage: 67 },
        { text: "Червена — попадаш на 29.", nextPage: 29 },
        { text: "Зелена — прехвърли се на 82.", nextPage: 82 },
        { text: "Черна — отгърни на 53.", nextPage: 53 },
      ],
    },
    18: {
      text: `След доста усилия импровизираната манерка е готова.`,
      choices: [
        {
          text: "Отбележи си, че нямаш вече диня и премини на 194.",
          nextPage: 194,
          removeFromInventory: { item: 'melon', quantity: 1}
        },
      ],
    },
    19: {
      text: `Щом те виждат отново в колибата, министрите моментално падат на колене и започват да блъскат чела в земята.

        — Върна се, великодушни наш благодетелю!

        — Спасителю!

        — Бащице!

        — Значи ще станеш министър на външните работи, нали!`,
      choices: [{ text: "Продължи на 102.", nextPage: 102 }],
    },
    20: {
      text: `— Еха-а-а-а, търговци! — възторжено се провиква таласъмът. — Грабители на народа значи! Кърлежи! Кръвопийци! Напред, братя таласъми! Да ограбим награбеното от народа!

        И блатните таласъми се устремяват към вас. Предводителят им спира на няколко крачки от вас и пита:

        — Е, ще предадете ли доброволно цялото си имущество, или да ви принудим със сила?`,
      choices: [
        {
          text: "— Аз викам да им го дадем, шефе — обажда се Хухавел.",
          nextPage: 28,
        },
        { text: "— Не, да се бием — възразява Бабаитко.", nextPage: 41 },
        { text: "— По-добре да бягаме — предлага Фърчилан.", nextPage: 54 },
      ],
    },
    21: {
      text: `Когато се свестяваш, лежиш в тясна килия, а около теб седят унило четиримата чукундурти.`,
      choices: [
        { text: "Попадал ли си вече в затвора?", nextPage: 285, requiresCondition: 'jailed' },
        { text: "Не — продължи на 132.", nextPage: 132 },
      ],
    },

    22: {
      text: `Бабаитко гордо се изпъчва и пристъпва към вехтошаря.
      
          — Слушай сега, старче. Обмислих нещата и гледай сега как ще уредим сделката. Ти, значи, ми даваш всичките тези вехтории.
      
          Настава тишина. Старчето изчаква малко, после пита:
      
          — А на мен каква ще ми е ползата?
      
          Бабаитко свива едрия си юмрук и го поднася към носа му.
      
          — Ползата ще ти е в това, че няма да те опердаша. Разбра ли?
      
          — О, такава ли била работата? — усмихва се старчето. — Ами тъй кажи, бе човек! Заповядай, заповядай! Чакай само да ти постеля това килимче, че да не стъпваш по прашната земя.
      
          И без да се бави, вехтошарят пъргаво разпъва пред себе си килимчето — кръгло и абсолютно черно. Бабаитко ви хвърля през рамо победоносен поглед, после пристъпва напред… и с ужасен писък пропада в земята.
      
          Няколко секунди стоиш вкаменен от изумление. Сетне осъзнаваш — това не е никакво килимче, а преносима дупка.
      
          — Помо-о-о-ощ! — долита от земните недра отчаяният рев на Бабаитко. — Измъкнете ме оттук!
      
          — Като много знаеш да се репчиш, там ще стоиш — подвиква отгоре старчето. — Ей сега пак ще навия дупката и ще си останеш завинаги под земята.
      
          С много молби и увещания най-сетне успявате да се споразумеете — срещу два кочана царевица старчето ви разрешава да измъкнете Бабаитко. Щом излиза отново на бял свят, едрият чукундурт се отдръпва засрамено настрани.
      
          Отбележи си загубата на двата кочана царевица и избери на кого ще повериш да води сделката.
      `,
      choices: [
        { text: "Гадолини — продължи на 47.", nextPage: 47 },
        { text: "Хухавел — попадаш на 61.", nextPage: 61 },
        { text: "Фърчилан — прехвърли се на 94.", nextPage: 94 },
        { text: "Сам ще водиш сделката — отгърни на 119.", nextPage: 119 },
      ],
    },
    23: {
      text: `— Слушай сега — почва да обяснява Хухавел. — Можеш ли да лапнеш малко жарава от огъня?
      
          — Мога, как да не мога — кимва змеят и за доказателство налапва половината жарава.
      
          — Ха сега лапни и това — подава му царевицата Хухавел. — И чакай да видиш какво ще стане.
      
          В течение на една минута не се случва нищо. Сетне, по всички закони на науката, царевицата се превръща в пуканки с оглушителен трясък. Ошашавен, змеят отскача настрани и почва да клати глава като куче, лапнало пчела.
      
          — Сега е моментът! — провиква се Фърчилан. — Да бягаме!
      
          — Чакайте! — протестира Хухавел. — Недейте да бягате! Това е недоразумение. Всичко ще обясня.
      
          Кого ще послушаш?
`,
      choices: [
        { text: "Фърчилан — мини на 32.", nextPage: 32 },
        { text: "Хухавел — продължи на 56.", nextPage: 56 },
      ],
    },
    24: {
      text: `
          Или все пак камъкът ви е излъгал, или просто от вас не стават гъбари. След дълго лутане из гората най-сетне откривате само няколко гъби. При това странни — едри и шарени. Всяка в различен цвят — жълта, синя, зелена, червена и черна. 
          Бабаитко боязливо оглежда чудноватите гъби и прошепва: 
          — Не ми харесва тая работа, шефе. Гъбите май са вълшебни. 
          — Абе, стига си говорил глупости! — прекъсва го Фърчилан. — Дай сега бързичко да си ги опечем. 
          — И като станеш после на жаба, ще видиш едни гъби — мрачно заявява Гадолини. — Вие както щете, ама аз вълшебни гъби не ям. 
          Гадолини определено е прав. Дори и да не са вълшебни, гъбите може да са отровни. Затова категорично забраняваш всякакво ядене. 
          Имаш ли книжката „Вълшебните гъби по нашите земи“? 
          `,
      choices: [
        { text: "Да — мини на 63. ", nextPage: 63 },
        { text: "Не — продължи на 98. ", nextPage: 98 },
      ],
    },
    25: {
      text: `
            Когато огледалцето му казва, че е най-красив на земята, таласъмът изпада във възторг. Без повече да ви обръща внимание, той се отдръпва настрани с безценната придобивка.  
            `,
      choices: [
        {
          text: "Напълваш съдинката си с вода и преминаваш на 177. ",
          nextPage: 177,
        },
      ],
    },
    26: {
      text: `
            Още щом влизаш в колибата, разбираш какво са имали предвид, като говореха за централно отопление — огнището се намира точно в средата. Обаче колкото и да се оглеждаш, не виждаш никъде нито капка вода. 
— Къде ви е течащата вода? — обръщаш се ти към министъра на разните работи. 
Той размахва ръка нагоре. 
— Виждаш ли я онази дупка горе на тавана? Като завали, през нея ще ти тече колкото искаш. 
— Чукундуртска ви работа — заявяваш ти и се приготвяш за сън. 
Уви, нощта не е твърде приятна. Малко преди полунощ започва да вали като из ведро, а проклетата дупка се намира точно над огнището. Естествено, огънят изгасва и ти чак до сутринта зъзнеш, омотан като пашкул в парцаливите завивки. Когато се развиделява, дъждът спира, но злото вече е сторено — гърлото те боли и кихаш на поразия.
            `,
      choices: [
        {
          text: " Отбележи си, че си настинал и премини на 155.  ",
          nextPage: 155,
        },
        // effect: { health: -1 }
        // inventory: { water: +1 }
      ],
    },
  },
};

if (inventory.centipede) {
  bookData.pages[2].choices.push({
    text: "Ако имаш стоножка в бурканче, мини на 113. ",
    setInventory: { centipede: false },
    nextPage: 113,
  });
}
if (inventory.pipePiece) {
  bookData.pages[2].choices.push({
    text: "Ако имаш лула на мира, продължи на 159. ",
    setInventory: { pipePiece: false },
    nextPage: 159,
  });
}
if (inventory.corn) {
  bookData.pages[2].choices.push({
    text: "Ако имаш царевица, прехвърли се на 192. ",
    setInventory: { corn: false },
    nextPage: 192,
  });
}
bookData.pages[2].choices.push({
  text: "Ако нямаш нищо от изброеното, попадаш на 203. ",
  nextPage: 203,
});

bookData.pages[2].moreText =
  "А ако имаш два или три от тези предмети, избери с кой си готов да се разделиш и премини на съответния епизод.";
