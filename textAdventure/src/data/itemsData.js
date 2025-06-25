
export const itemsData = {
    gourd: {
        quantity: 0,
        displayName: "кратунка",
        picture: ""
    },
    mirror: {
        quantity: 0,
        displayName: "огледало",
        description: "Вълшебно огледало. Питай го кой е най-красив.",
        picture: ""
    },
    makaron: {
        quantity: 0,
        displayName: "крив макарон",
        description: "Хубавите неща се виждат само през крив макарон",
        picture: ""
    },
    hole: {
        quantity: 0,
        displayName: "преносима дупка",
        picture: ""
    },
    book: {
        quantity: 0,
        displayName: "книга \"Вълшебните гъби по нашите земи\"",
        picture: ""
    },
    centipede: {
        quantity: 0,
        displayName: "стоножка в бурканче",
        picture: ""
    },
    shampoo: {
        quantity: 0,
        displayName: "шампоан",
        picture: ""
    },
    dryWater: {
        quantity: 0,
        displayName: "шише със суха вода",
        picture: ""
    },
    oldTrousers: {
        quantity: 0,
        displayName: "вехти панталони",
        picture: ""
    },
    twistedTrinket: {
        quantity: 0,
        displayName: "крива джаджа",
        description: "Част от машината за правене на суха вода. Мишемориус, каза че е дефектна и произвежда обикновена вода.",
        picture: "",
        showDescription: false // visitedPages 
        // showDescription: visitedPages.includes(225)???
    },
    tomato: {
        quantity: 0,
        displayName: "домат",
        picture: ""
    },
    corn: {
        quantity: 0,
        displayName: "царевица",
        picture: ""
    },
    beetroot: {
        quantity: 0,
        displayName: "цвекло", // свещеният чукундур(цвекло)
        picture: ""
    },
    soap: {
        quantity: 0,
        displayName: "сапун",
        description: "Като ни засвирят коремите от глад, няма къде да се дяваме. И сапун ще жвакаме.",
        picture: ""
    },
    watermelon: {
        quantity: 0,
        displayName: "диня",
        picture: ""
    },
    pipe: {
        quantity: 0,
        displayName: "лула на мира",
        description: "Издълбан пън, от който стърчи кух израстък.",
        picture: ""
    },
    duck: {
        quantity: 0,
        displayName: "патка",
        description: "Патицата на Хухавел",
        picture: ""
    },
    // shall i add them as non sellable?
    straightTrinket: {
        quantity: 0,
        displayName: "права джаджа",
        description: "Част от машината за правене на суха вода.",
        showDescription: false, // visitedPages 
        sellable: false,
        picture: ""
    },
    bottleOfWater: {
        quantity: 0,
        displayName: "съдинка с вода",
        sellable: false,
        picture: ""
    },
    bottleOfSolvent: {
        quantity: 0,
        displayName: "шише разтворител",
        sellable: false,
        picture: ""
    },
    bottleEmpty: {
        quantity: 0,
        displayName: "празна съдинка",
        sellable: false,
        picture: ""
    },
    herb: {
        quantity: 0,
        displayName: "билка-кандилка",
        description: "Ако я сложиш на някого във виното, моментално пада кьоркютук пиян. Или поне така твърди Хухавел",
        sellable: false,
        picture: ""
    },
    // Гъбки:
    // когато имам книгата да се покажат свойствата на гъбките
    // Приемаме че когато отхапеш само малко от гъбите, за дегустация на свойствата, те остават в инвентара като нахапани гъби?
    mushrooms: {
        sellable: false,
        quantity: 0,
        displayName: "шепа гъби",
        yellow: {
            quantity: 1,
            displayName: "жълта гъба",
            description: "Увеличава онзи, който хапне от нея.",
            picture: "/img/mushroomYellow.jpg",
            showDescription: false // requireItem or visitedPages
        },
        blue: {
            quantity: 1,
            displayName: "синя гъба",
            description: "Смалява многократно консуматора си.",
            picture: "/img/mushroomBlue.jpg",
            showDescription: false
        },
        red: {
            quantity: 1,
            displayName: "червена гъба",
            description: "Силно намалява теглото.",
            picture: "/img/mushroomRed.jpg",
            showDescription: false
        },
        green: {
            quantity: 1,
            displayName: "зелена гъба",
            description: "Увеличава теглото.",
            picture: "/img/mushroomGreen.jpg",
            showDescription: false
        },
        black: {
            quantity: 1,
            displayName: "черна гъба",
            description: "Невероятно отровна, убива жертвата за броени минути.",
            picture: "/img/mushroomBlack.jpg",
            showDescription: false
        },
    }

}