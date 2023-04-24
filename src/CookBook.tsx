import {Box, Typography} from "@mui/material";
import {DishItem} from "./DishItem";
import * as React from "react";
import {useSelectDish} from "./use-select-dish";
import {IngredientList} from "./IngredientList";
import {SearchField} from "./SearchField";
import emptyImage from './assets/empty.png';

export function CookBook() {
    const {selectedDishes, ingredients, onDishToggle, dishes, searchString, onSearchChange} = useSelectDish();

    const itemChanged = (index: number) => {
        onDishToggle(dishes[index].id);
    };

    return (
        <Box>
            <Typography variant={"h3"} textAlign="center">Cook Book</Typography>
            <SearchField searchString={searchString} onChange={onSearchChange}/>
            <Box flexDirection="column" alignItems="center" display="flex">
                {
                    dishes.map(({title, picture, ingredients}, i) => (
                        <DishItem title={title} picture={picture} ingredients={ingredients} key={i}
                                  onChange={itemChanged.bind(null, i)}
                                  isChecked={selectedDishes.includes(dishes[i].id) || false}/>
                    ))
                }
                {
                    !dishes.length && (
                        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                            <img src={emptyImage} alt="empty" style={{maxWidth: '300px'}}/>
                            <Typography>No entries...</Typography>
                        </Box>

                    )
                }
            </Box>
            <IngredientList ingredients={ingredients}/>
        </Box>

    );
}