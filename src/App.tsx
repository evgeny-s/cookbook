import React, {useState} from 'react';
import {CookBook} from "./components/CookBook";
import {createTheme, CssBaseline, Theme, ThemeProvider} from "@mui/material";
import {ThemeSwitcher} from "./components/ThemeSwitcher";
import {ToggleVariants} from "./types/toggle-variants.type";

function App() {
    const defaultTheme = () => createTheme({
        palette: {
            mode: 'light',
        },
    });
    const [theme, setTheme] = useState<Theme>(defaultTheme());
    const onSwitcherToggle = (mode: ToggleVariants) => {
        const theme = () => createTheme({
            palette: {
                mode,
            },
        });
        setTheme(theme);
    };

    return (
        <ThemeProvider theme={theme}>
            <ThemeSwitcher onToggle={onSwitcherToggle}/>
            <CssBaseline/>
            <CookBook/>
        </ThemeProvider>
    );
}

export default App;
