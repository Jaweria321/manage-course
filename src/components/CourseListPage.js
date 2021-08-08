import React from 'react';
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
const CourseListPage = () => {
    const { courseid } = useParams();
    console.log(courseid);
    const location = useLocation();
    console.log(location);
    const history = useHistory();
    console.log(history);
    const match = useRouteMatch();
    console.log(match);
    return (
        <>
        <p>
            Course List Page
        </p>
        {/* 
        {location.pathname === '/courselist/123' && <button onClick={ () => {history.goBack()}}>Go Back</button>}
        */}
        
        </>
    )
}

export default CourseListPage
