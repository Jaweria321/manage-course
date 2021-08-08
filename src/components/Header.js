import React from 'react'
import { Link } from 'react-router-dom';
import routeNames from '../routeNames';
const Header = () => {
    return (
        <>
            <Link to={routeNames.homeRoute}>Home</Link>
            <span> | </span>
            <Link to={routeNames.aboutRoute}>About</Link>
            <span> | </span>
            <Link to={routeNames.courseListRoute}>Course List</Link>
        </>
    )
}

export default Header
