import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Carousel from './Carousel';


const useStyles = makeStyles(() => ({
    banner : {
        background : "url(./banner3.jpg) no-repeat",
        backgroundSize: 'auto'
    },
    bannerContent : {
        height : 400,
        display : 'flex',
        flexDirection : 'column',
        paddingTop : 25,
        justifyContent : 'space-around'
    },
    tagline : {
        display : 'flex',
        height : '40%',
        flexDirection : 'column',
        justifyContent : 'center',
        textAlign : 'center',
        
    }
})
)

const Banner = () => {


    const classes = useStyles()

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                    <Typography
                    variant="h2"
                    style={{
                        fontWeight : 'bold',
                        marginBottom : 15,
                    }}
                    >
                        Dec.Crypto
                    </Typography>
                    <Typography
                    variant="subtitle2"
                    style={{
                        textTransform : 'capitalize',
                        color : 'darkgrey'
                    }}
                    >
                        get all information about your favorite Cryptocurrency and market price.
                    </Typography>
                </div>
                <Carousel />
            </Container>       
        </div>
    )
}

export default Banner
