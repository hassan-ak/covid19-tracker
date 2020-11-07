// React Imports
import React from 'react';

// Material UI Imports
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

// CountUp Imports 
import Countup from 'react-countup';

// Styles Imports
import './Cards.css'


// Function for UntilNowCards
export const UntilNowCard = () => {
    return (
        <div className="container">
            <h3>Summary</h3>
            <Grid container spacing={3} justify="center">

                {/* Infected Card */}
                <Grid item xs={8} md={3} component={Card} className="card infected">    
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <Countup start = {0} end = {1000000} duration = {.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date("2020-02-25T00:00:00Z").toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Total Infections due to COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>

                {/* Recovered Card */}
                <Grid item xs={8} md={3} component={Card} className="card recovered"> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <Countup start = {0} end = {200} duration = {.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date("2020-02-25T00:00:00Z").toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Total Recovered from COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>
                
                {/* Deaths Card */}
                <Grid item xs={8} md={3} component={Card} className="card deaths"> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <Countup start = {0} end = {25} duration = {.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date("2020-02-25T00:00:00Z").toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Total Deaths due to COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>

      </Grid>
    </div>
    )}