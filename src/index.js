import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Page from './Componets/Page';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateRecord from './Componets/new-record/create-record';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' render={() => <Page/>} exact></Route>
      <Route path='/post' render={() => <CreateRecord/>} exact></Route>
      <Route path='/get' exact></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
