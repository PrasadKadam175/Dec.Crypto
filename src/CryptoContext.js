import React, { createContext, useContext, useEffect, useState } from 'react';

//creating context
const Crypto = createContext();


const CryptoContext = ( { children }) => {

    const [ currency, setCurrency ] = useState("INR");
    const [ symbol, setSymbol ] = useState("₹");

    //logic for select button
    useEffect(() => {
        if(currency === 'INR') setSymbol("₹");
        else if (currency === 'USD') setSymbol("$");
    },[ currency ])

    return (
        <Crypto.Provider value={{currency,symbol,setCurrency}}>
            { children }
        </Crypto.Provider>
    )
}

export default CryptoContext;

//use context
export const CryptoState = () => {
    return useContext(Crypto);
}
