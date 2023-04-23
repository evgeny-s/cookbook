import {Box, Card, CardContent, Fab, IconButton, Paper, TextField, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Zoom from "@mui/material/Zoom";
import * as React from "react";
import {Ingredient} from "./config";
import {useEffect, useState} from "react";
import {ContentCopy} from "@mui/icons-material";
import copy from 'copy-to-clipboard';
import DoneIcon from '@mui/icons-material/Done';

interface IngredientListProps {
    ingredients: Ingredient[],
}

export const IngredientList = ({ingredients}: IngredientListProps) => {
    const [isListVisible, setIsListVisible] = useState<boolean>(false);
    const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
    const [isCopyConfirmVisible, setIsCopyConfirmVisible] = useState<boolean>(false);

    useEffect(() => {
        if (ingredients.length === 0) {
            setIsButtonVisible(false)
        } else {
            setIsButtonVisible(true)
        }
    }, [ingredients]);

    if (!isButtonVisible) {
        return null;
    }

    const handleClick = () => {
        setIsListVisible(!isListVisible);
    };

    const formatIngredients = () => {
        return ingredients.map(({
                                    title,
                                    unit,
                                    amount
                                }: Ingredient) => `${title} - ${amount}${unit}`).join('\n');
    };

    const handleCopyClick = () => {
        copy(formatIngredients());
        setIsCopyConfirmVisible(true);
        setTimeout(() => {
            setIsCopyConfirmVisible(false);
        }, 500);
    };

    return (
        <Box>
            <Zoom
                in={true}
                timeout={100}
                style={{
                    transitionDelay: `100ms`,
                }}
                unmountOnExit
            >
                <Fab sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                }} aria-label={'Ingredients'} color={'primary' as 'primary'} onClick={handleClick}>
                    <ShoppingCartIcon/>
                </Fab>
            </Zoom>

            {isListVisible && (
                <Card style={{
                    backgroundColor: "white",
                    position: "fixed",
                    bottom: "80px",
                    width: '100%',
                    right: '10px',
                    margin: '5px',
                    maxWidth: '300px',
                    maxHeight: '500px',
                    overflow: 'auto',
                }}>
                    <CardContent>
                        <Typography variant="h6">Ingredients:</Typography>
                        <TextField
                            hidden={isListVisible}
                            style={{width: '100%'}}
                            placeholder="Ingredients"
                            multiline
                            variant="standard"
                            value={formatIngredients()}
                        />
                        <Box textAlign="right">
                            {
                                isCopyConfirmVisible && <IconButton><DoneIcon color={'success' as 'success'}/></IconButton>
                            }
                            {
                                !isCopyConfirmVisible && (
                                    <IconButton aria-label="copy" onClick={handleCopyClick}
                                                color={'secondary' as 'secondary'}>
                                        <ContentCopy/>
                                    </IconButton>
                                )
                            }
                        </Box>
                    </CardContent>
                </Card>
            )}
        </Box>
    )
};