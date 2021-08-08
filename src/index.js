import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CourseListPage from './components/CourseListPage';
import { BrowserRouter, Route } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/courselist" component={CourseListPage} />
    </BrowserRouter>
  </React.StrictMode>
  , document.getElementById('root')
);

