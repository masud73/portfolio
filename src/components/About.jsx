import React from 'react';
import { Card } from 'react-bootstrap';


export function AboutMe()
{
    return (
        <div className='card-wrapper flex-column-center'>
            <header>
                <h2>About Me</h2>
            </header>
            <Card>
                <Card.Body>
                    <Card.Text as='p'>
                        Hi there, My name is Masud. I hail from Nigeria. I'm a self-taught developer
                        and I'm so passionate about computer programming and creating stuffs for the web.
                        Though I'm still learning and creating cool things
                        along the way. 
                        <br />
                        <br />
                        Some of my projects can be found below. Please check them out.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}