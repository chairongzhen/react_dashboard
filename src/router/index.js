import React,{Component} from 'react';
import {
    HashRouter,
    // BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Dashboard from '../layout/Dashboard';
import { MarketValues, Distribution,Bonds,BadNews } from '../features';
import { NotFound } from '../components';

class AppRoute extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return <HashRouter>
        <Switch>
            {/* 首页 */}
            <Route path="/" component={()=>(
                <Dashboard>
                    <Route exact path="/" component={MarketValues}/>
                    <Route exact path="/values" component={MarketValues}/>
                    <Route exact path="/dist" component={Distribution}/>
                    <Route exact path="/bonds" component={Bonds}/>
                    <Route exact path="/badnews" component={BadNews}/>
                    <Route exact path="/404" component={NotFound}/>
                    {/* 404页面 */}
                    {/* <Route component={NotFound}/> */}
                    <Redirect to="/" />
                </Dashboard>
            )}>
            </Route>
            <Redirect to="/" />
        </Switch>
    </HashRouter>
    }
}
export default AppRoute;