import React from 'react';
import App from './App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CourseListPage from './components/CourseListPage';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import routeNames from './routeNames';

const Router = () => {
    return (
        <BrowserRouter>
            <Route component={Header} />
            <Route exact path={routeNames.defaultRoute} component={App} />
            <Route exact path={routeNames.homeRoute} component={HomePage} />
            <Route exact path={routeNames.aboutRoute} component={AboutPage} />
            <Route exact path={routeNames.courseListRoute} component={CourseListPage} />
        </BrowserRouter>
    )
}

export default Router
