import React from "react";
import { Button } from 'react-bootstrap';

import Social from "./social";


export default function Footer()
{
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <Button id='btn-hire' as='a' href='#send-msg'>Hire me</Button>
             <Social />
             <small>@ Masud Production {year}</small>
        </>
    );
}
