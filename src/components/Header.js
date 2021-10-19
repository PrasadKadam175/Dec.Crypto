import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, Toolbar, Typography, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';



const Header = () => {

    //Styles using makesstyles
    const useStyles = makeStyles(() => ({
        Heading : {
            flex : 1,
            color : 'gold',
            fontFamily : 'Montserrat',
            fontWeight : 'bold',
            cursor : 'pointer',
        }
    }))

    //to provide dark theme into the app
    const darktheme = createTheme({
        palette : {
            primary : {
                main : '#fff'
            },
            type : 'dark'
        }
    })

    const history = useHistory();

    //direct back to home when click on title using history
    const classes = useStyles();

    const { currency, setCurrency } = CryptoState();


    return (
        <ThemeProvider theme={darktheme}>
        <AppBar color="transparent" position="static">
            <Container>
                <Toolbar>
                    <Typography onClick={() => history.push("/")} className={classes.Heading} variant="h4">Dec.Cryto</Typography>
                    <Select
                    variant="outlined"
                    style={{
                        width : 100,
                        height :40,
                        marginRight : 15,
                    }}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'INR'}>INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    )
}

export default Header;
