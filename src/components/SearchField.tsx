import {Box, IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {ChangeEvent, useCallback} from "react";

interface SearchFieldProps {
    searchString: string;
    onChange: (value: string) => void;
}

export const SearchField = ({searchString, onChange}: SearchFieldProps) => {
    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }, [searchString]);

    return (
        <Box display="flex" justifyContent="center">
            <Paper
                component="form"
                sx={{margin: '8px', display: 'flex', alignItems: 'center', width: '350px'}}
            >
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Search dishes..."
                    inputProps={{'aria-label': 'Search dishes...'}}
                    value={searchString}
                    onChange={handleOnChange}
                />
                <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </Box>
    );
}