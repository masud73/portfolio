import React from 'react';
import { CardGroup } from 'react-bootstrap';

import CounterApp from './projects/Counter';
import SearchFilterApp from './projects/SearchFilter';



export function MyProjects()
{
    return (
        <>
            <header>
                <h2>My Works</h2>
            </header>
            <CardGroup as='div' className='projects-container flex-start'>
                <SearchFilterApp />
                <CounterApp />
                <SearchFilterApp />
            </CardGroup>
        </>
    );
}