import React from "react";
import Container from "react-bootstrap/Container";
import Grid from '@material-ui/core/Grid'
import { RegistrationPart } from './Employees/RegistrationPart';
import { NewDeclarationPart } from './Taxpayers/NewDeclarationPart';
import LeftToolBar from './LeftToolBar'
import { Switch, Route } from "react-router-dom";

const sidebarUrls = [
    {
        title: 'Registration',
        url: '/registration'
    },
    {
        title: 'Sent declarations',
        url: '/declarations'
    },
    {
        title: 'Sent checks',
        url: '/checks'
    },
    {
        title: 'Debt info',
        url: '/debt_info'
    }
]

export const TaxpayersMaket = () => {
    return (
        <Container fluid="true">
            <Grid container spacing={2}>
                <Grid className="justify-content-md-left" item xs={2}>
                    <LeftToolBar sidebarUrls = {sidebarUrls}/>
                </Grid>
                <Grid item xs={10}>
                    <Switch>
                        {/* <Route exact path="/taxpayers/registration" component={RegistrationPart} /> */}
                        <Route exact path="/taxpayers/declarations" component={NewDeclarationPart} />
                        <Route exact path="/taxpayers/checks" component={RegistrationPart} />
                        <Route exact path="/taxpayers/debt_info" component={RegistrationPart} />
                    </Switch>
                </Grid>
            </Grid>
        </Container>
    )
}