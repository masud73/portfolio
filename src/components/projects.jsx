import React from 'react';
import { CardGroup } from 'react-bootstrap';

import CounterApp from './projects/Counter';



export function MyProjects()
{
    return (
        <>
            <header>
                <h2>My Works</h2>
            </header>
            <CardGroup as='div' className='projects-container flex-start'>
                <CounterApp />
                <CounterApp />
                <CounterApp />
            </CardGroup>
        </>
    );
}