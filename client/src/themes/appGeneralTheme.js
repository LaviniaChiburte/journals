import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from '@material-ui/core';

const AppGeneralTheme = (props) => {

    const theme = createMuiTheme({
        typography: {
            htmlFontSize: 10,
            fontFamily: 'Philosopher'
        }
    });

    return <ThemeProvider theme={theme} >
        {props.children}
    </ThemeProvider >
};

export default AppGeneralTheme;