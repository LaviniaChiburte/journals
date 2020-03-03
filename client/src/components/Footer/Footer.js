import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
    title: {
        textDecoration: "none",
        fontSize: "2rem",
        padding: '.3em .5em .3em',
        fontFamily: "Philosopher",
        color: '#fff'
    },
    footer: {
        background: "#baa6a5",
    		width: '100%',
        minHeight: '6.4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <BottomNavigation className={classes.footer}>
            <Typography className={classes.title}>
                {"Copyright © "}
                <Link color="inherit" href="https://material-ui.com/">
                    Journals
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </BottomNavigation>
//serch what we need to put in the footer
    );
}
