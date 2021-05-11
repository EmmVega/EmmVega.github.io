import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "../pages/Home";  
import Sportplayer from '../pages/Sportplayer';
import NotFound from '../pages/NotFound'
import Donor from '../pages/Donor';
import Layout from '../components/Layout';
import Register from '../components/Register';
import Login from '../pages/Login';

const App = () => (
    <BrowserRouter>
        <Layout>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path='/sportplayer' component={Sportplayer}/>
            <Route exact path='/donor' component={Donor} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register}/>
            <Route component={NotFound} />
        </Switch>
        </Layout>
    </BrowserRouter>

)

export default App;