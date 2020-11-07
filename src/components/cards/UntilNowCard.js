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
export const UntilNowCard = () => {

    // use Data from Data Context
    const context = useContext(DataContext);

    // If Data from API is not fetched
    if(context.isFetching){
        return(
            <div className="container">
                <h3>Summary</h3>
                <Grid container spacing={3} justify="center">

                {/* Infected Card */}
                <Grid item xs={8} md={3} component={Card} className="card infected">    
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">Loading...</Typography>
                        <Typography color="textSecondary">Loading...</Typography>
                        <Typography variant="body2">Total Infections due to COVID-19.</Typography>
                    </CardContent>
                </Grid>

                {/* Recovered Card */}
                <Grid item xs={8} md={3} component={Card} className="card recovered"> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">Loading...</Typography>
                        <Typography color="textSecondary">Loading...</Typography>
                        <Typography variant="body2">Total Recovered from COVID-19.</Typography>
                    </CardContent>
                </Grid>
                
                {/* Deaths Card */}
                <Grid item xs={8} md={3} component={Card} className="card deaths"> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">Loading...</Typography>
                        <Typography color="textSecondary">Loading...</Typography>
                        <Typography variant="body2">Total Deaths due to COVID-19.</Typography>
                    </CardContent>
                </Grid>

      </Grid>
    </div>
    )}

    return (
        <div className="container">
            <h3>Summary</h3>
            <Grid container spacing={3} justify="center">

                {/* Infected Card */}
                <Grid item xs={10} md={3} component={Card} className="card infected">    
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <Countup start = {0} end = {parseInt(context.data.totalConfirmed)} duration = {.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(context.data.dated).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Total Infections due to COVID-19.
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
                            <Countup start = {0} end = {parseInt(context.data.totalRecovered)} duration = {.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(context.data.dated).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Total Recovered from COVID-19.
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
                            <Countup start = {0} end = {parseInt(context.data.totalDeaths)} duration = {.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(context.data.dated).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Total Deaths due to COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>

      </Grid>
    </div>
    )}