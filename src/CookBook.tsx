import {Box, Typography} from "@mui/material";
import {config} from "./config";
import {DishItem} from "./DishItem";
import * as React from "react";
import {useSelectDish} from "./use-select-dish";
import {IngredientList} from "./IngredientList";
import {SearchField} from "./SearchField";

export function CookBook() {
    const {selectedDishes, ingredients, onDishToggle, dishes, searchString, onSearchChange} = useSelectDish();

    const itemChanged = (index: number) => {
        onDishToggle(dishes[index].id);
    };

    return (
        <Box>
            <Typography variant={"h3"} textAlign="center">Cook Book</Typography>
            <SearchField searchString={searchString} onChange={onSearchChange} />
            <Box flexDirection="column" alignItems="center" display="flex">
                {
                    dishes.map(({title, picture, ingredients}, i) => (
                        <DishItem title={title} picture={picture} ingredients={ingredients} key={i}
                                  onChange={itemChanged.bind(null, i)}
                                  isChecked={selectedDishes.includes(dishes[i].id) || false}/>
                    ))
                }

            </Box>
            <IngredientList ingredients={ingredients}/>
        </Box>

    );
}