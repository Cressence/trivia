import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Result from './pages/result';

const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/result' component={Result} />
            </Switch>
        </HashRouter>
    );
};

export default Routes;