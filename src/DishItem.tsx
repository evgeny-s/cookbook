import {Card, CardActions, CardContent, CardMedia, Checkbox, Typography} from "@mui/material";
import {Ingredient} from './config'
import * as React from "react";

type DishProps = {
    title: string;
    picture: string;
    ingredients: Ingredient[],
    onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void,
    isChecked: boolean,
}

export const DishItem = ({title, picture, ingredients, onChange, isChecked}: DishProps) => {
    return (
        <Card sx={{maxWidth: 500, minWidth: 350, margin: '5px 5px 20px 5px'}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={picture}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Ingredients:
                </Typography>
                {ingredients.map((ingredient, i) => (
                    <Typography variant="body2" color="text.secondary" key={i}>
                        {ingredient.title} - {ingredient.amount} {ingredient.unit}
                    </Typography>
                ))}
            </CardContent>
            <CardActions>
                <Checkbox onChange={onChange} checked={isChecked}/>
            </CardActions>
        </Card>
    );
};