import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import InitialPage from './../../components/InitialPage'
import LoginWrapper from './../../containers/LoginWrapper'
import RegisterWrapper from './../../containers/RegisterWrapper'
import store from './../../store'
import {syncHistoryWithStore} from 'react-router-redux'
import DashboardPage from './../../components/DashboardPage'
import EmptyChat from './../../components/EmptyChat'
import Chat from './../../containers/ChatWrapper'

const history = syncHistoryWithStore(browserHistory, store);
class RouterWrapper extends React.PureComponent {
    render() {
        return (
            <Router history={history}>
                <Route path='/' component={InitialPage}>
                    <IndexRoute component={LoginWrapper}/>
                    <Route path='/register' component={RegisterWrapper}/>
                </Route>
                <Route path="/dashboard" component={DashboardPage}>
                    <IndexRoute component={EmptyChat}/>
                    <Route path="chat/:userId" components={Chat}/>
                </Route>
            </Router>
        )
    }
}
export default RouterWrapper
