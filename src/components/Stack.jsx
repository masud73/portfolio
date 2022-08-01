import React from 'react';
import { Card } from 'react-bootstrap';


export function MyStack()
{
    return (
        <div className='card-wrapper flex-column-center'>
            <header>
                <h2 id='myStack'>Tools And Languages</h2>
            </header>
            <Card>
                <Card.Body>
                    <Card.Text as='ul'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>React JS</li>
                        <li>Bootstrap</li>
                        <li>C</li>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>Git</li>
                        <li>VS Code</li>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}