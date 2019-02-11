import React from 'react'

import Header from '../Components/Header'
import ScreeningForm from '../Components/ScreeningForm'
import PatientFind from '../Components/PatientFind'
import reviewForm from '../Components/reviewForm'

import { Route, Switch, Redirect } from 'react-router-dom'

export const Routes = () => {
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                crossorigin="anonymous"
            />

            <Header />
            
            <Switch>
                <Route exact path="/home" component={ScreeningForm} />
                <Route exact path="/alaf" component={ScreeningForm} />
                <Route exact path="/alaf/review" component={reviewForm} />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/patient" component={PatientFind} />
            </Switch>
        </div>
    )
}