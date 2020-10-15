import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Lista from './pages/listaAmigos'
import Login from './pages/login'
import QuemSomos from './pages/quemSomos'
import Feed from './pages/feed'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/lista' component={Lista}/>
      <Route exact path='/quem-somos' component={QuemSomos}/>
      <Route exact path='/feed' component={Feed}/>
    </Switch>
  </BrowserRouter>
)
export default Routes
