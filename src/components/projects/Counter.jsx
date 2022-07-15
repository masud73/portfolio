import React from "react";
import { Card } from "react-bootstrap";

import CounterSnapshort from '../../static/images/counter-app-screenshort.JPG';



export default function CounterApp()
{
    return (
        <>
            <Card>
                <Card.Link href='https://www.masud73.github.io/counter' className='project-link' rel='noopener noreferrer' target='_blank'>
                    <Card.Img id='project-snap' variant='top' src={CounterSnapshort} alt='Counter Snapshort' />
                </Card.Link>
                <Card.Body className='project-body'>
                    <Card.Title>Counter</Card.Title>
                    <Card.Link href='https://www.github.com/masud73/counter' rel='noopener noreferrer' target='_blank'>Source code</Card.Link>
                </Card.Body>
            </Card>
        </>
    );
}