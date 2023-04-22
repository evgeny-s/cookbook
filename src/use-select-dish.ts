import {useEffect, useState} from "react";
import {Dish, Ingredient} from "./config";

interface UseSelectDishInterface {
    ingredients: Ingredient[];
    selectedDishes: boolean[];
    onDishToggle: (index: number) => void
}

export const useSelectDish = (allDishes: Dish[]): UseSelectDishInterface => {
        const [ingredients, setIngredients] = useState<Ingredient[]>([]);
        const [selectedDishes, setSelectedDishes] = useState<boolean[]>([]);

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

            console.log('newIngredients', newIngredients);

            return newIngredients;
        };

        const aggregateIngredients = () => {
            let ingredients: Ingredient[] = [];
            allDishes.filter((dish, index) => {
                return selectedDishes[index] === true;
            }).forEach((dish) => {
                ingredients = [...ingredients, ...dish.ingredients]
            });

            setIngredients(groupIngredients(ingredients));
        };

        useEffect(() => {
            aggregateIngredients();
        }, [selectedDishes]);

        useEffect(() => {
            if (allDishes && allDishes.length) {
                const newSelectedDishes: boolean[] = [];
                allDishes.forEach((dish) => {
                    newSelectedDishes.push(false)
                })
                setSelectedDishes(newSelectedDishes);

            }
        }, [allDishes]);

        const onDishToggle = (index: number) => {
            const currentSelectedDishes = [...selectedDishes];
            currentSelectedDishes[index] = !selectedDishes[index];

            setSelectedDishes(currentSelectedDishes);
        };

        return {
            ingredients, selectedDishes, onDishToggle
        };
    }
;