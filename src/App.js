import React, { Suspense } from 'react';

import Img from './static/images/img-01.jpg';

import './App.css';



function App()
{
    return (
        <React.Fragment>
            <h1>Hello, portfo</h1>
            <Suspense fallback='Loading image...'>
                <img style={{borderRadius: '50%', objectFit: 'cover'}} height='300' width='300' src={Img} alt='Masud' />
            </Suspense>
        </React.Fragment>
    );
}

export default App;