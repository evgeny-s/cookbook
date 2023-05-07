import {useEffect, useState} from "react";
import {config, Dish, Ingredient} from "../config/config";

interface UseSelectDishInterface {
    ingredients: Ingredient[];
    selectedDishes: string[];
    onDishToggle: (index: string) => void,
    dishes: Dish[],
    searchString: string;
    onSearchChange: (value: string) => void;
}

export const useSelectDish = (): UseSelectDishInterface => {
        const [ingredients, setIngredients] = useState<Ingredient[]>([]);
        const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
        const [dishes, setDishes] = useState<Dish[]>([]);
        const [allDishes, setAllDishes] = useState<Dish[]>([]);
        const [searchString, setSearchString] = useState<string>('');

        const separator = '|&|';

        const buildKey = (title: string, unit: string): string => {
            return `${title}|&|${unit}`
        }

        const extractFromKey = (key: string): { title: string, unit: string } => {
            const parts = key.split(separator);

            return {title: parts[0], unit: parts[1]}
        };

        const groupIngredients = (ingredients: Ingredient[]) => {
            const summedMap = new Map<string, number>();

            ingredients.forEach((ingredient: Ingredient) => {
                const key = buildKey(ingredient.title, ingredient.unit)
                if (summedMap.has(key)) {
                    const value = summedMap.get(key) || 0;
                    summedMap.set(key, value + ingredient.amount);
                } else {
                    summedMap.set(key, ingredient.amount)
                }
            })

            const newIngredients: Ingredient[] = [];
            for (const [key, amount] of summedMap.entries()) {
                const {title, unit} = extractFromKey(key);
                newIngredients.push({title, unit, amount});
            }

            return newIngredients;
        };

        const aggregateIngredients = () => {
            let ingredients: Ingredient[] = [];
            allDishes.filter((dish, index) => {
                return selectedDishes.includes(allDishes[index].id);
            }).forEach((dish) => {
                ingredients = [...ingredients, ...dish.ingredients]
            });

            setIngredients(groupIngredients(ingredients));
        };

        useEffect(() => {
            aggregateIngredients();
        }, [selectedDishes]);

        useEffect(() => {
            setDishes(config.dishes);
            setAllDishes(config.dishes);
        }, []);

        useEffect(() => {
            if (!searchString) {
                return setDishes(config.dishes)
            }

            const currentDishes = [...dishes];
            setDishes(currentDishes.filter((dish) => dish.title.toLowerCase().includes(searchString.toLowerCase())));
        }, [searchString])

        const onDishToggle = (id: string) => {
            let currentSelectedDishes = [...selectedDishes];

            if (currentSelectedDishes.includes(id)) {
                const itemIndex = currentSelectedDishes.indexOf(id);
                currentSelectedDishes.splice(itemIndex, 1);
            } else {
                currentSelectedDishes.push(id);
            }

            setSelectedDishes(currentSelectedDishes);
        };

        const onSearchChange = (value: string) => {
            setSearchString(value);
        }

        return {
            ingredients, selectedDishes, onDishToggle, dishes, searchString, onSearchChange
        };
    }
;