// React Imports
import React, { useContext } from 'react';

// Material UI Imports
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

// CountUp Imports 
import Countup from 'react-countup';

// Styles Imports
import './Cards.css';

// Functional Components Imports
import DataContext from '../../functionalComponents/DataContext';

// Function for UntilNowCards
export const TodayCard = () => {

    // use Data from Data Context
    const context = useContext(DataContext);

    // If Data from API is not fetched
    if(context.isFetching){
        return(
            <div className="container">
                <h3>Today</h3>
                <Grid container spacing={3} justify="center">

                {/* Infected Card */}
                <Grid item xs={8} md={3} component={Card} className="card infected">    
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">Loading...</Typography>
                        <Typography variant="body2">
                            New Infections reported today. 
                            <br/>
                            (Loading...)
                        </Typography>
                    </CardContent>
                </Grid>

                {/* Recovered Card */}
                <Grid item xs={8} md={3} component={Card} className="card recovered"> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">Loading...</Typography>
                        <Typography variant="body2">
                            New Recovered reported today. 
                            <br/>
                            (Loading...)
                        </Typography>
                    </CardContent>
                </Grid>
                
                {/* Deaths Card */}
                <Grid item xs={8} md={3} component={Card} className="card deaths"> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">Loading...</Typography>
                        <Typography variant="body2">
                            New Deaths reported today. 
                            <br/>
                            (Loading...)
                        </Typography>
                    </CardContent>
                </Grid>

      </Grid>
    </div>
    )}

    return (
        <div className="container">
            <h3>Today</h3>
            <Grid container spacing={3} justify="center">

                {/* Infected Card */}
                <Grid item xs={10} md={3} component={Card} className="card infected">    
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <Countup start = {0} end = {parseInt(context.data.newConfirmed)} duration = {.5} separator = ","/>
                        </Typography>
                        <Typography variant="body2">
                            New Infections reported today. 
                            <br/>
                            ({new Date(context.data.dated).toDateString()})
                        </Typography>
                    </CardContent>
                </Grid>

                {/* Recovered Card */}
                <Grid item xs={10} md={3} component={Card} className="card recovered"> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <Countup start = {0} end = {parseInt(context.data.newRecovered)} duration = {.5} separator = ","/>
                        </Typography>
                        <Typography variant="body2">
                            New Recovered reported today. 
                            <br/>
                            ({new Date(context.data.dated).toDateString()})
                        </Typography>
                    </CardContent>
                </Grid>
                
                {/* Deaths Card */}
                <Grid item xs={10} md={3} component={Card} className="card deaths"> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <Countup start = {0} end = {parseInt(context.data.newDeaths)} duration = {.5} separator = ","/>
                        </Typography>
                        <Typography variant="body2">
                            New Deaths reported today. 
                            <br/>
                            ({new Date(context.data.dated).toDateString()})
                        </Typography>
                    </CardContent>
                </Grid>

      </Grid>
    </div>
    )}