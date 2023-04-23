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
        ingredients: [
            {title: 'Кости на суп (свинина)', amount: 1, unit: 'упаковка'},
            {title: 'Свекла свежая', amount: 5, unit: 'шт'},
            {title: 'Морковь', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Картофель', amount: 1, unit: 'упаковка'},
            {title: 'Томат (паста)', amount: 1, unit: 'банка'},
            {title: 'Капуста белокачанная', amount: 1, unit: 'шт'},
            {title: 'Перец болгарский', amount: 1, unit: 'шт'},
            {title: 'Зелень (укроп, лук, зелень)', amount: 1, unit: 'шт'},
            {title: 'Специи', amount: 1, unit: 'шт'},
        ]
    }, {
        title: 'Куриный суп',
        picture: 'https://gotovim-doma.ru/images/recipe/e/d7/ed7f7fb19e9fba185ed5ccbe4ffb39ef_l.jpg',
        ingredients: [
            {title: 'Окорочка куриные или индейка', amount: 1, unit: 'упаковка'},
            {title: 'Морковь', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Картофель', amount: 1, unit: 'упаковка'},
            {title: 'Макароны (паутинка)', amount: 1, unit: 'упаковка'},
            {title: 'Зелень (укроп, лук, зелень)', amount: 1, unit: 'шт'},
            {title: 'Специи', amount: 1, unit: 'шт'},
        ]
    }, {
        title: 'Грибной суп',
        picture: 'https://static.1000.menu/img/content-v2/78/2a/18882/legkii-gribnoi-sup-s-vermishelu_1603697003_15_max.jpg',
        ingredients: [
            {title: 'Шампиньоны', amount: 300, unit: 'гр'},
            {title: 'Лампа', amount: 1, unit: 'упаковка'},
            {title: 'Окорочка куриные или индейка', amount: 1, unit: 'упаковка'},
            {title: 'Морковь', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Картофель', amount: 1, unit: 'упаковка'},
            {title: 'Зелень (укроп, лук, зелень)', amount: 1, unit: 'шт'},
        ]
    }, {
        title: 'Гороховый суп',
        picture: 'https://buljon.ru/files/styles/recipe_large/public/images/recipes/2021-10/AWw65ylRRUgl5RnAy1YTs87JG91G27nip1wU1ZiQVMI.jpg',
        ingredients: [
            {title: 'Кости на суп (свинина)', amount: 1, unit: 'упаковка'},
            {title: 'Морковь', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Картофель', amount: 1, unit: 'упаковка'},
            {title: 'Горох', amount: 1, unit: 'упаковка'},
            {title: 'Зелень (укроп, лук, зелень)', amount: 1, unit: 'шт'},
            {title: 'Специи', amount: 1, unit: 'шт'},
        ]
    }, {
        title: 'Суп-пюре из грибов шампиньонов и брокколи',
        picture: 'https://www.ogorod.ru/images/cache/1200x750/crop/images%7Ccms-image-000108436.jpg',
        ingredients: [
            {title: 'Брокколи (мороженные)', amount: 1, unit: 'упаковка'},
            {title: 'Шампиньоны', amount: 300, unit: 'гр'},
            {title: 'Морковь', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Картофель', amount: 1, unit: 'упаковка'},
            {title: 'Специи', amount: 1, unit: 'шт'},
            {title: 'Сливки', amount: 1, unit: 'упаковка'},
            {title: 'Плавленый сыр', amount: 1, unit: 'упаковка'},
        ]
    }, {
        title: 'Окрошка',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%D0%9E%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B0_Okroshka_05.jpg/800px-%D0%9E%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B0_Okroshka_05.jpg',
        ingredients: [
            {title: 'Картофель', amount: 1, unit: 'упаковка'},
            {title: 'Яйца', amount: 1, unit: 'упаковка'},
            {title: 'Сметана', amount: 1, unit: 'упаковка'},
            {title: 'Огурец', amount: 1, unit: 'шт'},
            {title: 'Лук зеленый', amount: 1, unit: 'шт'},
            {title: 'Колбаса (вареная)', amount: 300, unit: 'гр'},
            {title: 'Укроп', amount: 1, unit: 'связка'},
            {title: 'Редис', amount: 1, unit: 'шт'},
        ]
    }, {
        title: 'Гречневый суп',
        picture: 'https://ist.say7.info/img0004/12/412_0167lys_3419_1024.jpg',
        ingredients: [
            {title: 'Картофель', amount: 1, unit: 'упаковка'},
            {title: 'Гречка', amount: 1, unit: 'упаковка'},
            {title: 'Морковь', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Зелень (укроп, лук, зелень)', amount: 1, unit: 'шт'},
            {title: 'Специи', amount: 1, unit: 'шт'},
            {title: 'Кости на суп (свинина или индейка)', amount: 1, unit: 'упаковка'},
        ]
    }, {
        title: 'Рисовый суп',
        picture: 'https://www.maggi.ru/data/images/recept/img640x500/recept_1678_tahp.jpg',
        ingredients: [
            {title: 'Картофель', amount: 1, unit: 'упаковка'},
            {title: 'Рис', amount: 1, unit: 'упаковка'},
            {title: 'Морковь', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Зелень (укроп, лук, зелень)', amount: 1, unit: 'шт'},
            {title: 'Специи', amount: 1, unit: 'шт'},
            {title: 'Кости на суп (свинина или индейка)', amount: 1, unit: 'упаковка'},
        ]
    }, {
        title: 'Зеленый борщ',
        picture: 'https://2recepta.com/recept/zelenyj-borshh-so-shhavelem-i-yajcom/zelenyj-borshh-so-shhavelem-i-yajcom.jpg',
        ingredients: [
            {title: 'Картофель', amount: 1, unit: 'упаковка'},
            {title: 'Щавель', amount: 1, unit: 'связка'},
            {title: 'Морковь', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Зелень (укроп, лук, зелень)', amount: 1, unit: 'шт'},
            {title: 'Специи', amount: 1, unit: 'шт'},
            {title: 'Яйцо', amount: 3, unit: 'шт'},
            {title: 'Сметана', amount: 1, unit: 'уп'},
            {title: 'Сливки', amount: 1, unit: 'уп'},
            {title: 'Кости на суп (свинина или индейка)', amount: 1, unit: 'упаковка'},
        ]
    }, {
        title: 'Суп с фрикадельками',
        picture: 'https://art-lunch.ru/wp-content/uploads/2017/12/Soup_with_meatballs_001.jpg',
        ingredients: [
            {title: 'Картофель', amount: 1, unit: 'упаковка'},
            {title: 'Рис', amount: 1, unit: 'упаковка'},
            {title: 'Морковь', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Зелень (укроп, лук, зелень)', amount: 1, unit: 'шт'},
            {title: 'Специи', amount: 1, unit: 'шт'},
            {title: 'Кости на суп (свинина или индейка или курица)', amount: 1, unit: 'упаковка'},
        ]
    }, {
        title: 'Капустняк',
        picture: 'https://rutxt.ru/files/3283/original/3f3ae06384.JPG',
        ingredients: [
            {title: 'Кости на суп (свинина или индейка или курица)', amount: 1, unit: 'упаковка'},
            {title: 'Картофель', amount: 1, unit: 'упаковка'},
            {title: 'Морковь', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Зелень (укроп, лук, зелень)', amount: 1, unit: 'шт'},
            {title: 'Специи', amount: 1, unit: 'шт'},
            {title: 'Пшено', amount: 1, unit: 'упаковка'},
            {title: 'Томат (паста)', amount: 1, unit: 'банка'},
        ]
    }, {
        title: 'Солянка',
        picture: 'https://cdn.lifehacker.ru/wp-content/uploads/2020/06/6_1592925463-scaled-e1592925524667.jpg',
        ingredients: [
            {title: 'Кости на суп (свинина или индейка или курица)', amount: 1, unit: 'упаковка'},
            {title: 'Картофель', amount: 1, unit: 'упаковка'},
            {title: 'Морковь', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Зелень (укроп, лук, зелень)', amount: 1, unit: 'шт'},
            {title: 'Специи', amount: 1, unit: 'шт'},
            {title: 'Оливки', amount: 1, unit: 'упаковка'},
            {title: 'Сметана', amount: 1, unit: 'упаковка'},
            {title: 'Рис', amount: 1, unit: 'упаковка'},
            {title: 'Огурец солёный', amount: 1, unit: 'банка'},
            {title: 'Колбаса (варёная)', amount: 300, unit: 'гр'},
        ]
    },]
};