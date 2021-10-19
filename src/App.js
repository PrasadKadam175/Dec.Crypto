import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';



import Homepage from './pages/Homepage';
import Header from './components/Header';
import Coinpage from './pages/Coinpage';

const App = () => {

    const useStyles = makeStyles(() => ({

        App : {
            backgroundColor : '#14161a',
            color : '#fff',
            minHeight : '100vh'
        }

    }))

    const classes = useStyles();

    return (
       <BrowserRouter>
            <div className={classes.App}>
                <Header />
                <Route path="/" component={Homepage} exact/>
                <Route path="/coins/:id" component={Coinpage} />
            </div>
       </BrowserRouter>
    )
}

export default App;
