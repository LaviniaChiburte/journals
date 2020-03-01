import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from '@material-ui/core';

const ButtonMainTheme = (props) => {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#baa6a5',
                dark: '#a6c6c1',
                contrastText: '#fff'
            }
        }
    });

    return <ThemeProvider theme={theme} >
        {props.children}
    </ThemeProvider >
};

export default ButtonMainTheme;