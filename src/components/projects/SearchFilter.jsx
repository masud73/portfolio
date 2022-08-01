import React from "react";
import { Card } from "react-bootstrap";

import SearchFilterSnapshort from '../../static/images/search-filter-app-snap.JPG';



export default function SearchFilterApp()
{
    return (
        <>
            <Card>
                <Card.Link href='https://search-filterr.netlify.app/' className='project-link' rel='noopener noreferrer' target='_blank'>
                    <Card.Img id='project-snap' variant='top' src={SearchFilterSnapshort} alt='Search-Filter Snapshort' />
                </Card.Link>
                <Card.Body className='project-body'>
                    <Card.Title>Search Filter</Card.Title>
                    <Card.Link href='https://www.github.com/masud73/search-filter' rel='noopener noreferrer' target='_blank'>Source code</Card.Link>
                </Card.Body>
            </Card>
        </>
    );
}