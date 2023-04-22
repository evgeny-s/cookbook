import {Box, TextField, Typography} from "@mui/material";
import {config, Ingredient} from "./config";
import {DishItem} from "./DishItem";
import * as React from "react";
import {useSelectDish} from "./use-select-dish";
import {useEffect} from "react";

export function CookBook() {
    const {selectedDishes, ingredients, onDishToggle} = useSelectDish(config.dishes);

    useEffect(() => {
        console.log(ingredients);
    }, [ingredients]);

    useEffect(() => {
        console.log(selectedDishes);
    }, [selectedDishes]);

    const itemChanged = (index: number, event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        onDishToggle(index);
    };

    return (
        <Box>
            <Typography variant={"h3"}>Cook Book</Typography>
            <Box flexDirection="column" alignItems="center" display="flex">
                {
                    config.dishes.map(({title, picture, ingredients}, i) => (
                        <DishItem title={title} picture={picture} ingredients={ingredients} key={i}
                                  onChange={itemChanged.bind(null, i)} isChecked={selectedDishes[i] || false}/>
                    ))
                }

            </Box>
            <Box>
                <TextField
                    style={{width: '100%'}}
                    placeholder="Ingredients"
                    multiline
                    variant="standard"
                    value={ingredients.map(({title, unit, amount}: Ingredient) => `${title} - ${amount}${unit}`)}
                />
            </Box>
        </Box>

    );
}