import {v4 as uuid} from "uuid";

export type Ingredient = {
    title: string;
    amount: number;
    unit: string;
};

export type Dish = {
    id: string;
    title: string;
    picture: string;
    ingredients: Ingredient[];
};

export type Config = {
    dishes: Dish[]
};

export const config: Config = {
    dishes: [{
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
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
    }, {
        id: uuid(),
        title: 'Рыбный суп с овощами',
        picture: 'https://img1.russianfood.com/dycontent/images_upl/508/big_507081.jpg', // TODO: Add
        ingredients: [
            {title: 'Рыба', amount: 1, unit: 'упаковка'},
            {title: 'Овощи замороженные', amount: 1, unit: 'упаковка'},
            {title: 'Картофель', amount: 1, unit: 'упаковка'},
            {title: 'Морковь', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Зелень (укроп, лук, зелень)', amount: 1, unit: 'шт'},
            {title: 'Специи', amount: 1, unit: 'шт'},
            {title: 'Пшеничная или ячневая крупа', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Куриное филе в сливочном соусе',
        picture: 'https://e3.edimdoma.ru/data/recipes/0003/2323/32323-ed4_wide.jpg?1468668325', // TODO: Add
        ingredients: [
            {title: 'Куриное филе', amount: 1, unit: 'упаковка'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Чеснок', amount: 2, unit: 'шт'},
            {title: 'Сливки', amount: 1, unit: 'укаковка'},
            {title: 'Тимьян', amount: 1, unit: 'укаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Мясо по-французски',
        picture: 'https://art-lunch.ru/content/uploads/2013/08/french_meat_01.jpg', // TODO: Add
        ingredients: [
            {title: 'Свинина', amount: 1, unit: 'кг'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Сыр', amount: 200, unit: 'гр'},
            {title: 'Майонез', amount: 1, unit: 'банка'},
            {title: 'Помидоры', amount: 4, unit: 'шт'},
        ]
    }, {
        id: uuid(),
        title: 'Куриные отбивные',
        picture: 'https://img1.russianfood.com/dycontent/images_upl/116/big_115490.jpg', // TODO: Add
        ingredients: [
            {title: 'Куриное филе', amount: 1, unit: 'упаковка'},
            {title: 'Яйца', amount: 2, unit: 'шт'},
            {title: 'Мука', amount: 1, unit: 'упаковка'},
            {title: 'Чеснок', amount: 1, unit: 'шт'},
        ]
    }, {
        id: uuid(),
        title: 'Жаркое из свинины с овощами',
        picture: 'https://www.photorecept.ru/wp-content/uploads/2018/06/zharkoe-iz-svininy-s-ovoshhami-e1583251626703.jpg', // TODO: Add
        ingredients: [
            {title: 'Свинина', amount: 1, unit: 'кг'},
            {title: 'Картофель', amount: 1, unit: 'упаковка'},
            {title: 'Морковь', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Цукини', amount: 3, unit: 'шт'},
            {title: 'Баклажаны', amount: 3, unit: 'шт'},
            {title: 'Помидоры', amount: 3, unit: 'шт'},
            {title: 'Перец', amount: 3, unit: 'шт'},
            {title: 'Специи', amount: 1, unit: 'упаковка'},
            {title: 'Зелень', amount: 1, unit: 'упаковка'},
            {title: 'Томатная паста', amount: 1, unit: 'банка'},
        ]
    }, {
        id: uuid(),
        title: 'Гуляш из говядины',
        picture: 'https://static.1000.menu/img/content/33240/gulyash-iz-govyadiny-s-podlivkoi-peredelka_1552320197_10_max.jpg', // TODO: Add
        ingredients: [
            {title: 'Говядина', amount: 1, unit: 'кг'},
            {title: 'Морковь', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Перец', amount: 3, unit: 'шт'},
            {title: 'Томатная паста', amount: 1, unit: 'банка'},
        ]
    }, {
        id: uuid(),
        title: 'Котлеты по домашнему',
        picture: 'https://www.patee.ru/r/x4/43/9c/960m.jpg', // TODO: Add
        ingredients: [
            {title: 'Фарш свинной', amount: 1, unit: 'упаковка'},
            {title: 'Яйца', amount: 1, unit: 'упаковка'},
            {title: 'Батон', amount: 1, unit: 'шт'},
            {title: 'Лук', amount: 3, unit: 'шт'},
            {title: 'Чеснок', amount: 1, unit: 'шт'},
            {title: 'Мука', amount: 1, unit: 'упаковка'},
            {title: 'Специи', amount: 1, unit: 'упаковка'},
            {title: 'Молоко', amount: 1, unit: 'бутылка'},
        ]
    }, {
        id: uuid(),
        title: 'Котлеты из мяса птицы',
        picture: 'https://2recepta.com/recept/kotlety-iz-kurinogo-farsha/kotlety-iz-kurinogo-farsha.jpg', // TODO: Add
        ingredients: [
            {title: 'Фарш куриный', amount: 1, unit: 'упаковка'},
            {title: 'Яйца', amount: 1, unit: 'упаковка'},
            {title: 'Батон', amount: 1, unit: 'шт'},
            {title: 'Лук', amount: 3, unit: 'шт'},
            {title: 'Чеснок', amount: 1, unit: 'шт'},
            {title: 'Сухари панировочные', amount: 1, unit: 'упаковка'},
            {title: 'Молоко', amount: 1, unit: 'бутылка'},
        ]
    }, {
        id: uuid(),
        title: 'Тефтели в соусе',
        picture: 'https://img.delo-vcusa.ru/2012/12/DSC_0092.jpg', // TODO: Add
        ingredients: [
            {title: 'Фарш (любой)', amount: 1, unit: 'упаковка'},
            {title: 'Яйца', amount: 1, unit: 'упаковка'},
            {title: 'Лук', amount: 3, unit: 'шт'},
            {title: 'Чеснок', amount: 1, unit: 'шт'},
            {title: 'Томатная паста', amount: 1, unit: 'банка'},
            {title: 'Сметана', amount: 1, unit: 'упаковка'},
            {title: 'Специи', amount: 1, unit: 'упаковка'},
            {title: 'Зелень', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Плов с курицей',
        picture: 'https://s1.eda.ru/StaticContent/Photos/160209183658/160214181922/p_O.jpg', // TODO: Add
        ingredients: [
            {title: 'Филе куриное', amount: 1, unit: 'упаковка'},
            {title: 'Морковь', amount: 3, unit: 'шт'},
            {title: 'Лук', amount: 3, unit: 'шт'},
            {title: 'Рис', amount: 1, unit: 'упаковка'},
            {title: 'Чеснок', amount: 3, unit: 'шт'},
            {title: 'Специи для плова', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Плов с мясом',
        picture: 'https://img.povar.ru/main-micro/33/31/0d/a2/plov_s_myasom-397714.jpg', // TODO: Add
        ingredients: [
            {title: 'Свинина или говядина', amount: 1, unit: 'кг'},
            {title: 'Морковь', amount: 3, unit: 'шт'},
            {title: 'Лук', amount: 3, unit: 'шт'},
            {title: 'Рис', amount: 1, unit: 'упаковка'},
            {title: 'Чеснок', amount: 3, unit: 'шт'},
            {title: 'Специи для плова', amount: 1, unit: 'упаковка'},
            {title: 'Чернослив/курага', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Грудка куриная с помидорами и моцареллой',
        picture: 'https://img.povar.ru/main-micro/f5/48/4a/c1/kurinie_grudki_s_mocarelloi_i_pomidorami-548135.JPG', // TODO: Add
        ingredients: [
            {title: 'Филе куриное', amount: 1, unit: 'упаковка'},
            {title: 'Помидоры черри', amount: 1, unit: 'упаковка'},
            {title: 'Моцарелла', amount: 1, unit: 'упаковка'},
            {title: 'Специи для курицы', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Печень',
        picture: 'https://my-gril.ru/images/pechen-v-duhovke/kurinaya-pechen-v-duhovke.jpg', // TODO: Add
        ingredients: [
            {title: 'Печень свиная', amount: 1, unit: 'кг'},
            {title: 'Мука', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Скумбрия запечёная',
        picture: 'https://finecooking.ru/images/recipe/skumbriya-zapechennaya-v-duhovke-v-folge/photo/960w.jpg', // TODO: Add
        ingredients: [
            {title: 'Скумбрия', amount: 2, unit: 'шт'},
            {title: 'Лук', amount: 3, unit: 'шт'},
            {title: 'Лимон', amount: 1, unit: 'шт'},
            {title: 'Специи для рыбы', amount: 1, unit: 'упаковка'},
            {title: 'Сметана или майонез', amount: 1, unit: 'упаковка'},
            {title: 'Горчица', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Перцы фаршированные',
        picture: 'https://cdn.lifehacker.ru/wp-content/uploads/2018/07/Depositphotos_29805857_original_1530881441-e1530881531882-630x314.jpg', // TODO: Add
        ingredients: [
            {title: 'Перец (сладкий)', amount: 8, unit: 'шт'},
            {title: 'Фарш', amount: 1, unit: 'упаковка'},
            {title: 'Лук', amount: 3, unit: 'шт'},
            {title: 'Морковь', amount: 3, unit: 'шт'},
            {title: 'Рис', amount: 1, unit: 'упаковка'},
            {title: 'Горчица', amount: 1, unit: 'упаковка'},
            {title: 'Специи', amount: 1, unit: 'упаковка'},
            {title: 'Зелень', amount: 1, unit: 'упаковка'},
            {title: 'Томатная паста', amount: 1, unit: 'банка'},
            {title: 'Сметана или сливки', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Пальчики',
        picture: 'https://e2.edimdoma.ru/data/recipes/0003/8925/38925-ed4_wide.jpg?1468594327', // TODO: Add
        ingredients: [
            {title: 'Мясо отбивное (любое)', amount: 1, unit: 'кг'},
            {title: 'Фарш или сало', amount: 1, unit: 'кг'},
            {title: 'Специи', amount: 1, unit: 'упаковка'},
            {title: 'Зубочистки (деревянные)', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Лосось (в духовке)',
        picture: 'https://static.1000.menu/img/content/31847/sochnyi-losos-v-duxovke_1548806251_1_max.jpg', // TODO: Add
        ingredients: [
            {title: 'Лосось', amount: 1, unit: 'кг'},
            {title: 'Специи', amount: 1, unit: 'упаковка'},
            {title: 'Сметана', amount: 1, unit: 'упаковка'},
            {title: 'Горчица', amount: 1, unit: 'упаковка'},
            {title: 'Лимон', amount: 1, unit: 'шт'},
            {title: 'Соевый соус', amount: 1, unit: 'банка'},
            {title: 'Мёд', amount: 1, unit: 'банка'},
        ]
    }, {
        id: uuid(),
        title: 'Рыба жаренная',
        picture: 'https://gotovim-doma.ru/images/recipe/a/af/aaf296508a1b60d2aeb7460574aadcfb_l.jpg', // TODO: Add
        ingredients: [
            {title: 'Рыба', amount: 1, unit: 'кг'},
            {title: 'Мука', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Крылышки в духовке',
        picture: 'https://img1.russianfood.com/dycontent/images_upl/573/big_572695.jpg', // TODO: Add
        ingredients: [
            {title: 'Крыло куриное', amount: 1, unit: 'кг'},
            {title: 'Сметана', amount: 1, unit: 'упаковка'},
            {title: 'Майонез', amount: 1, unit: 'банка'},
            {title: 'Мёд', amount: 1, unit: 'банка'},
            {title: 'Специи', amount: 1, unit: 'упаковка'},
            {title: 'Горчица', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Картофельное пюре',
        picture: 'https://nehudeem.ru/wp-content/uploads/2017/04/kartofpyur10.jpg', // TODO: Add
        ingredients: [
            {title: 'Картофель', amount: 1, unit: 'кг'},
            {title: 'Молоко', amount: 1, unit: 'бутылка'},
            {title: 'Масло сливочное', amount: 100, unit: 'гр'},
        ]
    }, {
        id: uuid(),
        title: 'Картофель молодой',
        picture: 'https://img.delo-vcusa.ru/2017/05/Blyuda-iz-molodoy-kartoshki-TOP-6-retseptov.jpg', // TODO: Add
        ingredients: [
            {title: 'Картофель (молодой)', amount: 1, unit: 'кг'},
            {title: 'Укроп', amount: 1, unit: 'упаковка'},
            {title: 'Специи', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Овощи запеченные со специями',
        picture: 'https://img1.russianfood.com/dycontent/images_upl/354/big_353318.jpg', // TODO: Add
        ingredients: [
            {title: 'Баклажаны', amount: 3, unit: 'шт'},
            {title: 'Перец (сладкий)', amount: 3, unit: 'шт'},
            {title: 'Цукини', amount: 3, unit: 'шт'},
            {title: 'Лук', amount: 3, unit: 'шт'},
            {title: 'Специи', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Гречка',
        picture: 'https://images.unian.net/photos/2022_08/thumb_files/400_0_1661694654-1836.jpg?r=816174', // TODO: Add
        ingredients: [
            {title: 'Гречка', amount: 1, unit: 'упаковка'},
            {title: 'Масло сливочное', amount: 100, unit: 'гр'},
        ]
    }, {
        id: uuid(),
        title: 'Гречка с грибами',
        picture: 'https://www.gastronom.ru/binfiles/images/20150212/b4d1a42c.jpg', // TODO: Add
        ingredients: [
            {title: 'Гречка', amount: 1, unit: 'упаковка'},
            {title: 'Шампиньоны', amount: 500, unit: 'гр'},
            {title: 'Лук', amount: 3, unit: 'шт'},
        ]
    }, {
        id: uuid(),
        title: 'Рис отварной с овощами',
        picture: 'https://www.gastronom.ru/binfiles/images/20160318/b0101eb5.jpg', // TODO: Add
        ingredients: [
            {title: 'Рис басмати', amount: 1, unit: 'упаковка'},
            {title: 'Смесь овощная замороженная', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Булгур',
        picture: 'https://klopotenko.com/wp-content/uploads/2021/04/kak-varit-bulgur_siteweb-2.jpg?v=1618913663', // TODO: Add
        ingredients: [
            {title: 'Булгур', amount: 1, unit: 'упаковка'},
            {title: 'Морковь', amount: 3, unit: 'шт'},
            {title: 'Лук', amount: 3, unit: 'шт'},
        ]
    }, {
        id: uuid(),
        title: 'Макароны/вермишель',
        picture: 'https://static.1000.menu/img/content-v2/16/93/16908/vermishel-jarenaya_1588228083_7_max.jpg', // TODO: Add
        ingredients: [
            {title: 'Макароны', amount: 1, unit: 'упаковка'},
            {title: 'Масло сливочное', amount: 100, unit: 'гр'},
        ]
    }, {
        id: uuid(),
        title: 'Рагу овощное',
        picture: 'https://lifehacker.ru/wp-content/uploads/2018/08/2018-08-14-21.37.40_1534243249.jpg', // TODO: Add
        ingredients: [
            {title: 'Картофель', amount: 1, unit: 'кг'},
            {title: 'Капуста', amount: 1, unit: 'шт'},
            {title: 'Лук', amount: 3, unit: 'шт'},
            {title: 'Морковь', amount: 3, unit: 'шт'},
            {title: 'Специи', amount: 1, unit: 'упаковка'},
            {title: 'Кабачок', amount: 3, unit: 'шт'},
            {title: 'Цукини', amount: 3, unit: 'шт'},
            {title: 'Масло (растительное или оливковое)', amount: 50, unit: 'гр'},
        ]
    }, {
        id: uuid(),
        title: 'Картофель жареный',
        picture: 'https://gotovim-doma.ru/images/recipe/8/01/801dfbfc272b13f476e2fbf42c89b233.jpg', // TODO: Add
        ingredients: [
            {title: 'Картофель', amount: 1, unit: 'кг'},
            {title: 'Лук', amount: 3, unit: 'шт'},
            {title: 'Масло (растительное или оливковое)', amount: 50, unit: 'гр'},
        ]
    }, {
        id: uuid(),
        title: 'Картофель запечённый в духовке',
        picture: 'https://img.povar.ru/main/c8/dd/7d/26/kartofel_zapechennii_v_duhovke_s_zeleniu_-78076.jpg', // TODO: Add
        ingredients: [
            {title: 'Картофель', amount: 1, unit: 'кг'},
            {title: 'Лук', amount: 3, unit: 'шт'},
            {title: 'Сыр', amount: 200, unit: 'гр'},
            {title: 'Морковь', amount: 3, unit: 'шт'},
            {title: 'Мясо', amount: 1, unit: 'кг'},
            {title: 'Сливки', amount: 1, unit: 'упаковка'},
            {title: 'Майонез', amount: 1, unit: 'банка'},
            {title: 'Специи', amount: 1, unit: 'упаковка'},
            {title: 'Горчица', amount: 1, unit: 'банка'},
            {title: 'Мёд', amount: 1, unit: 'банка'},
        ]
    }, {
        id: uuid(),
        title: 'Картофель по-французски',
        picture: 'https://s1.eda.ru/StaticContent/Photos/110809195434/120830154838/p_O.jpg', // TODO: Add
        ingredients: [
            {title: 'Картофель', amount: 1, unit: 'кг'},
            {title: 'Лук', amount: 3, unit: 'шт'},
            {title: 'Сыр', amount: 200, unit: 'гр'},
            {title: 'Помидор', amount: 3, unit: 'шт'},
            {title: 'Отбивная', amount: 1, unit: 'кг'},
            {title: 'Сливки', amount: 1, unit: 'упаковка'},
            {title: 'Майонез', amount: 1, unit: 'банка'},
            {title: 'Специи', amount: 1, unit: 'упаковка'},
            {title: 'Грибы', amount: 500, unit: 'гр'},
        ]
    }, {
        id: uuid(),
        title: 'Шампиньоны фаршированные',
        picture: 'https://img1.russianfood.com/dycontent/images_upl/582/big_581100.jpg', // TODO: Add
        ingredients: [
            {title: 'Фарш', amount: 1, unit: 'упаковка'},
            {title: 'Грибы', amount: 500, unit: 'гр'},
            {title: 'Морковь', amount: 3, unit: 'шт'},
            {title: 'Лук', amount: 3, unit: 'шт'},
            {title: 'Сыр', amount: 200, unit: 'гр'},
        ]
    }, {
        id: uuid(),
        title: 'Пирожки с картофелем или капустой',
        picture: 'https://gotovim-doma.ru/images/recipe/0/a7/0a75f7bc19f389ba95a83d4f96384614_l.jpg', // TODO: Add
        ingredients: [
            {title: 'Картофель или капуста', amount: 1, unit: 'кг'},
            {title: 'Мука', amount: 1, unit: 'упаковка'},
            {title: 'Яйцо', amount: 3, unit: 'шт'},
            {title: 'Дрожжи сухие', amount: 1, unit: 'упаковка'},
            {title: 'Сода', amount: 1, unit: 'упаковка'},
            {title: 'Лук', amount: 2, unit: 'шт'},
            {title: 'Масло подсолнечное', amount: 1, unit: 'бутылка'},
        ]
    }, {
        id: uuid(),
        title: 'Салат витаминный',
        picture: 'https://hochu-gotovit.ru/wp-content/uploads/2022/01/img_20220131_101444-700x394.jpg', // TODO: Add
        ingredients: [
            {title: 'Капуста (белокачанная)', amount: 1, unit: 'шт'},
            {title: 'Огурцы', amount: 5, unit: 'шт'},
            {title: 'Перец (сладкий)', amount: 3, unit: 'шт'},
            {title: 'Укроп', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Шапка Мономаха',
        picture: 'https://www.chafan.ru/wp-content/uploads/2012/05/chafan.ru-salat-shapka-monomaha-2017-04-14_04-24-12_849626.png', // TODO: Add
        ingredients: [
            {title: 'Картофель', amount: 1, unit: 'кг'},
            {title: 'Яйцо', amount: 3, unit: 'шт'},
            {title: 'Гранат', amount: 1, unit: 'шт'},
            {title: 'Сыр', amount: 200, unit: 'гр'},
            {title: 'Орех греческий', amount: 200, unit: 'гр'},
            {title: 'Майонез', amount: 1, unit: 'банка'},
        ]
    }, {
        id: uuid(),
        title: 'Салат весенний',
        picture: 'https://www.povarenok.ru/data/cache/2022mar/23/42/2953673_76541-710x550x.jpg', // TODO: Add
        ingredients: [
            {title: 'Капуста (белокачанная)', amount: 1, unit: 'кг'},
            {title: 'Редис', amount: 3, unit: 'шт'},
            {title: 'Огурцы', amount: 5, unit: 'шт'},
        ]
    }, {
        id: uuid(),
        title: 'Салат с курицей и овощами',
        picture: 'https://s1.eda.ru/StaticContent/Photos/150810204910/150818153524/p_O.jpg', // TODO: Add
        ingredients: [
            {title: 'Капуста (пекинская)', amount: 1, unit: 'кг'},
            {title: 'Куриная грудка', amount: 1, unit: 'упаковка'},
            {title: 'Перец (сладкий)', amount: 3, unit: 'шт'},
            {title: 'Майонез', amount: 1, unit: 'банка'},
        ]
    }, {
        id: uuid(),
        title: 'Салат свекольный на майонезе с чесноком',
        picture: 'https://img.povar.ru/main-micro/04/31/fa/f3/svekla_s_chesnokom_i_maionezom-58809.jpg', // TODO: Add
        ingredients: [
            {title: 'Свекла', amount: 4, unit: 'шт'},
            {title: 'Майонез', amount: 1, unit: 'банка'},
            {title: 'чеснок', amount: 1, unit: 'шт'},
        ]
    }, {
        id: uuid(),
        title: 'Сельд под шубой',
        picture: 'https://cooklikemary.ru/sites/default/files/74a707ec-c9c8-4bf8-ad3f-4aecc3c31e9a.jpeg', // TODO: Add
        ingredients: [
            {title: 'Сельдь', amount: 1, unit: 'упаковка'},
            {title: 'Свекла', amount: 3, unit: 'шт'},
            {title: 'Морковь', amount: 3, unit: 'шт'},
            {title: 'Картофель', amount: 500, unit: 'гр'},
            {title: 'Яйца', amount: 4, unit: 'шт'},
            {title: 'Лук', amount: 3, unit: 'шт'},
            {title: 'Майонез', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Салат оливье',
        picture: 'https://www.gastronom.ru/binfiles/images/20180119/b17ee29a.jpg', // TODO: Add
        ingredients: [
            {title: 'Колбаса или ветчина', amount: 200, unit: 'гр'},
            {title: 'Горошек', amount: 1, unit: 'банка'},
            {title: 'Картофель', amount: 4, unit: 'шт'},
            {title: 'Морковь', amount: 3, unit: 'шт'},
            {title: 'Яйца', amount: 4, unit: 'шт'},
            {title: 'Огурцы маринованные', amount: 1, unit: 'банка'},
            {title: 'Майонез', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Салат винегрет',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Vinegret_cleaned.jpg', // TODO: Add
        ingredients: [
            {title: 'Картофель', amount: 4, unit: 'шт'},
            {title: 'Свекла', amount: 4, unit: 'шт'},
            {title: 'Морковь', amount: 3, unit: 'шт'},
            {title: 'Огурцы маринованные', amount: 1, unit: 'банка'},
            {title: 'Горошек', amount: 1, unit: 'банка'},
            {title: 'Зелень', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Салат греческий',
        picture: 'https://art-lunch.ru/content/uploads/2018/07/Greek_salad_01.jpg', // TODO: Add
        ingredients: [
            {title: 'Помидоры', amount: 3, unit: 'шт'},
            {title: 'Огурцы', amount: 4, unit: 'шт'},
            {title: 'Лук (красный)', amount: 4, unit: 'шт'},
            {title: 'Перец (сладкий)', amount: 2, unit: 'шт'},
            {title: 'Сыр (фета)', amount: 1, unit: 'упаковка'},
            {title: 'Маслины без косточек', amount: 1, unit: 'банка'},
            {title: 'Орегано (сушеное)', amount: 1, unit: 'упаковка'},
            {title: 'Лимон', amount: 1, unit: 'шт'},
            {title: 'Оливкокое масло', amount: 1, unit: 'банка'},
        ]
    }, {
        id: uuid(),
        title: 'Салат осенний',
        picture: 'https://worldrecipes.eu/storage/34564/conversions/salat-oseny-medium.webp', // TODO: Add
        ingredients: [
            {title: 'Куриное филе', amount: 1, unit: 'упаковка'},
            {title: 'Шампиньоны', amount: 500, unit: 'гр'},
            {title: 'Лук', amount: 4, unit: 'шт'},
            {title: 'Огурцы маринованные', amount: 1, unit: 'банка'},
            {title: 'Кукуруза (консервированная)', amount: 1, unit: 'банка'},
            {title: 'Яйца', amount: 3, unit: 'шт'},
            {title: 'Чеснок', amount: 1, unit: 'шт'},
            {title: 'Майонез', amount: 1, unit: 'банка'},
            {title: 'Зелень', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Помидоры под сыром',
        picture: 'https://e0.edimdoma.ru/data/recipes/0000/0880/880-ed4_wide.jpg?1469002779', // TODO: Add
        ingredients: [
            {title: 'Помидоры', amount: 4, unit: 'шт'},
            {title: 'Сыр', amount: 400, unit: 'гр'},
            {title: 'Майонез', amount: 1, unit: 'банка'},
            {title: 'Чеснок', amount: 2, unit: 'шт'},
        ]
    }, {
        id: uuid(),
        title: 'Салат свекольный с орехами',
        picture: 'https://img.delo-vcusa.ru/2019/02/Svekolnyj-salat-s-greckim-orehom.jpg', // TODO: Add
        ingredients: [
            {title: 'Свекла', amount: 4, unit: 'шт'},
            {title: 'Майонез', amount: 1, unit: 'банка'},
            {title: 'Орехи грецкие', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Салат морковный с сыром',
        picture: 'https://img1.russianfood.com/dycontent/images_upl/254/big_253760.jpg', // TODO: Add
        ingredients: [
            {title: 'Морковь', amount: 3, unit: 'шт'},
            {title: 'Сыр', amount: 200, unit: 'гр'},
            {title: 'Майонез', amount: 1, unit: 'банка'},
            {title: 'Чеснок', amount: 1, unit: 'шт'},
        ]
    }, {
        id: uuid(),
        title: 'Салат из тунца',
        picture: 'https://s1.eda.ru/StaticContent/Photos/161026181903/161104130633/p_O.jpg', // TODO: Add
        ingredients: [
            {title: 'Тунец (консервированный)', amount: 1, unit: 'банка'},
            {title: 'Яйца', amount: 3, unit: 'шт'},
            {title: 'Огурец', amount: 4, unit: 'шт'},
            {title: 'Майонез', amount: 1, unit: 'банка'},
            {title: 'Укроп', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Блины',
        picture: 'https://img1.russianfood.com/dycontent/images_upl/457/big_456172.jpg', // TODO: Add
        ingredients: [
            {title: 'Молоко', amount: 1, unit: 'бутылка'},
            {title: 'Мука', amount: 1, unit: 'упаковка'},
            {title: 'Яйцо', amount: 3, unit: 'шт'},
            {title: 'Ванилин', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Блины с творогом',
        picture: 'https://baking-academy.ru/upload/iblock/358/3584068675953ac19dcf45df55835076.png', // TODO: Add
        ingredients: [
            {title: 'Молоко', amount: 1, unit: 'бутылка'},
            {title: 'Мука', amount: 1, unit: 'упаковка'},
            {title: 'Яйцо', amount: 3, unit: 'шт'},
            {title: 'Ванилин', amount: 1, unit: 'упаковка'},
            {title: 'Творог', amount: 1, unit: 'пачка'},
            {title: 'Изюм', amount: 1, unit: 'пачка'},
        ]
    }, {
        id: uuid(),
        title: 'Сырники',
        picture: 'https://klopotenko.com/wp-content/uploads/2020/06/syrniki_klassicheskie_siteweb-1000x600.jpg?v=1657617604', // TODO: Add
        ingredients: [
            {title: 'Творог', amount: 2, unit: 'упаковки'},
            {title: 'Яйцо', amount: 3, unit: 'шт'},
            {title: 'Сахар', amount: 100, unit: 'гр'},
            {title: 'Мука', amount: 1, unit: 'упаковка'},
        ]
    }, {
        id: uuid(),
        title: 'Шарлотка',
        picture: 'https://baking-academy.ru/upload/ammina.optimizer/jpg-webp/q80/upload/resize_cache/iblock/c47/720_1060_1/c47fae2a5fcbe95c2b1e9682b761db78.webp', // TODO: Add
        ingredients: [
            {title: 'Яйцо', amount: 3, unit: 'шт'},
            {title: 'Сахар', amount: 100, unit: 'гр'},
            {title: 'Мука', amount: 1, unit: 'упаковка'},
            {title: 'Яблоко', amount: 4, unit: 'шт'},
            {title: 'Сода', amount: 100, unit: 'гр'},
            {title: 'Лимон', amount: 1, unit: 'шт'},
            {title: 'Изюм', amount: 1, unit: 'упаковка'},
        ]
    }]
};
