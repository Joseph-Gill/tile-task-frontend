import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {TILESVIEW} from './paths'
import TilesView from '../pages/TilesView'


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route component={TilesView} exact path={TILESVIEW} />
            </Switch>
        </Router>
    )
}

export default Routes
