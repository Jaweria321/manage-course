import React from 'react';
import './cssStyle.css';

const HomePage = ({applyStyle}) => {
    //conditional style
    const style = applyStyle ? "textStyle" : "";
    return (
        <p className={style}>
            Home Page
        </p>
    )
}

export default HomePage
