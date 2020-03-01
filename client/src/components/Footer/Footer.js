import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    title: {
        textDecoration: "none",
        fontSize: "1rem",
        padding: '.2em .5em .2em',
        fontFamily: "Philosopher",
        color: '#fff'
    },
    footer: {
        background: "#baa6a5",
		width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <BottomNavigation className={classes.footer}>
            <Typography
                className={classes.title}
                variant={'h6'}
            >
                {/*Copyright Text*/}
            </Typography>
        </BottomNavigation>
//serch what we need to put in the footer
    );
}
