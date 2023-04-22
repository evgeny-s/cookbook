export type Ingredient = {
    title: string;
    amount: number;
    unit: string;
};

export type Dish = {
    title: string;
    picture: string;
    ingredients: Ingredient[];
};

export type Config = {
    dishes: Dish[]
};

export const config: Config = {
    dishes: [{
        title: 'Борщ',
        picture: 'https://img.delo-vcusa.ru/2020/11/Borshh-s-yablokami.jpg',
        ingredients: [{title: 'Варёный бурак', amount: 1, unit: 'упаковка'}]
    }, {
        title: 'Борщ',
        picture: 'https://img.delo-vcusa.ru/2020/11/Borshh-s-yablokami.jpg',
        ingredients: [{title: 'Варёный бурак', amount: 1, unit: 'упаковка'}]
    }, {
        title: 'Борщ',
        picture: 'https://img.delo-vcusa.ru/2020/11/Borshh-s-yablokami.jpg',
        ingredients: [{title: 'Варёный бурак', amount: 1, unit: 'упаковка'}]
    }, {
        title: 'Борщ',
        picture: 'https://img.delo-vcusa.ru/2020/11/Borshh-s-yablokami.jpg',
        ingredients: [{title: 'Варёный бурак', amount: 1, unit: 'упаковка'}]
    }, {
        title: 'Борщ',
        picture: 'https://img.delo-vcusa.ru/2020/11/Borshh-s-yablokami.jpg',
        ingredients: [{title: 'Варёный бурак', amount: 1, unit: 'упаковка'}]
    },]
};