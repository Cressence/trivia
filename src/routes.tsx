import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from './pages/home/home';

const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </HashRouter>
    );
};

export default Routes;