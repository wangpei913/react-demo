import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Home from './page/home/home';
import Buttons from './page/ui/buttons';
import Modals from './page/ui/modals';
import Loadings from './page/ui/loadings';
import Notification from './page/ui/notification';
import Tabs from './page/ui/tabs';
import NotFound from './page/notfound/404';
import Login from './page/form/login';
import BasicTable from './page/table/basicTable';
export default class IRouter extends React.Component {
    render () {
        return (
            <HashRouter>
                <App>
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Switch>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/ui/buttons' component={Buttons}></Route>
                                <Route path='/admin/ui/modals' component={Modals}></Route>
                                <Route path='/admin/ui/loadings' component={Loadings}></Route>
                                <Route path='/admin/ui/notification' component={Notification}></Route>
                                <Route path='/admin/ui/tabs' component={Tabs}></Route>
                                <Route path='/admin/form/login' component={Login}></Route>
                                <Route path='/admin/table/basic' component={BasicTable}></Route>
                                <Route component={NotFound}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                </App>
            </HashRouter>
        )
    }
}