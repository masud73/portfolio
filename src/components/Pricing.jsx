import React from 'react';

import { Card } from 'react-bootstrap';


export function Pricing()
{
    return (
        <div className='card-wrapper flex-column-center'>
            <header>
                <h2>Pricing</h2>
            </header>
            <Card>

                <Card.Body>
                    <Card.Text as='p'>
                        There's no fixed price. But you can have a simple static website here for as little as 5,000 naira.
                        <br />
                        <br />
                        Note: Price can be this higher. It ranges from 5,000 naira and up to 1M. (Depends on the site you want).
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}