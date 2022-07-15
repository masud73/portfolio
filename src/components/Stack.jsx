import React from 'react';

import { Card } from 'react-bootstrap';


export function MyStack()
{
    return (
        <div className='card-wrapper flex-column-center'>
            <header>
                <h2 id='myStack'>My Stack</h2>
            </header>
            <Card>
                <Card.Body>
                    <Card.Text as='ul'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>C</li>
                        <li>Python</li>
                        <li>Flask</li>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}