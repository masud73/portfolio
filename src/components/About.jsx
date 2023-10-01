import React from 'react';
import { Card } from 'react-bootstrap';


export function AboutMe()
{
    return (
        <div className='card-wrapper flex-column-center'>
            <header><h2>ABOUT ME</h2></header>
            <Card>
                <Card.Body>
                    <Card.Text as='p'>
                        Greetings, I am Masud, a front-end web developer based in Nigeria, boasting 4 years of professional experience. My expertise lies in crafting web solutions with a strong commitment to excellence.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
