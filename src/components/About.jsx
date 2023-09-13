import React from 'react';
import { Card } from 'react-bootstrap';


export function AboutMe()
{
    return (
        <div className='card-wrapper flex-column-center'>
            <header><h2>About Me</h2></header>
            <Card>
                <Card.Body>
                    <Card.Text as='p'>
                        Hi there, My name is Masud. I hail from Nigeria. I'm a full-stack web developer
                        and I love creating stuffs for the web and command-line. <br /> <br />
                        
                        I can deliver the following services: <br />
                    </Card.Text>
                    <ul>
                        <li>Static web pages</li>
                        <li>Dynamic web apps</li>
                        <li>Command-line programs</li>
                        <li>Maintaining any CRUD web app</li>
                    </ul>
                </Card.Body>
            </Card>
        </div>
    );
}
