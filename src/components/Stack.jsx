import React from 'react';
import { Card } from 'react-bootstrap';


export function MyStack()
{
    return (
        <div className='card-wrapper flex-column-center'>
            <header>
                <h2 id='myStack'>MY SKILL SET</h2>
            </header>
            <Card>
                <Card.Body>
                    <Card.Text as='ul'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                        <li>Git & GitHub</li>
                        <li>VS Code</li>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
