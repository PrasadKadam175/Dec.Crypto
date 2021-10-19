import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CryptoState } from '../CryptoContext';
import {HistoricalChart} from '../config/api';
import { CircularProgress, createTheme, makeStyles, ThemeProvider } from '@material-ui/core';

import { Line } from 'react-chartjs-2';
import { chartDays } from '../config/data';
import SelectButton from './SelectButton';


const useStyles = makeStyles((theme) => ({
    container : {
        width : '75%',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column',
        marginTop : 25,
        paddingTop : 40,
        [theme.breakpoints.down('md')] : {
            width : '100%',
            marginTop : 0,
            padding : 20,
            paddingTop : 0,
        }
    }
}))

const CoinInfo = ( { coin }) => {
    const [historicalData , setHistoricalData] = useState();
    const [days, setDays] = useState(1);

    const { currency } = CryptoState();

    const fetchHistoricalData = async () => {
        const  { data } = await axios.get(HistoricalChart(coin.id, days, currency));
        setHistoricalData(data.prices);
    }
    

    useEffect(() => {
        fetchHistoricalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currency, days])

    const darktheme = createTheme({
        palette : {
            primary : {
                main : '#fff'
            },
            type : 'dark'
        }
    })

    const classes = useStyles();

    return (
        <ThemeProvider theme={darktheme}>
            <div className={classes.container}>
                {!historicalData ? (
                    <CircularProgress 
                    style={{
                        color : 'gold'
                    }}
                    size={250}
                    thickness={1}
                    />
                ):(<>
                    <Line 
                    data = {{
                        labels : historicalData.map((coin) => {
                            let date = new Date(coin[0]);
                            let time = 
                                date.getHours() > 12
                                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                : `${date.getHours()}:${date.getMinutes()} AM`;

                                return days === 1 ? time : date.toLocaleDateString();
                        }),
                        datasets : [
                            { data : historicalData.map((coin)=> coin[1]),
                              label : `price (Past ${days} Days ) in ${currency}`,
                              borderColor : 'gold'
                            }
                    ]
                    }}
                    options={{
                        elements : {
                            point : {
                                radius : 1
                            },
                        },
                    }}
                    />
                    <div
                    style={{
                        display : 'flex',
                        marginTop : 20,
                        justifyContent : 'space-around',
                        width : '100%'
                    }}
                    >
                        {chartDays.map((day) => (
                            <SelectButton
                            key={day.value}
                            onClick={() => setDays(day.value)}
                            selected={day.value === days}
                            >{day.label}</SelectButton>
                        ))}
                    </div>
                </>)}
            </div>
        </ThemeProvider>
    )
}

export default CoinInfo
