import React from "react";
import { Button } from 'react-bootstrap';

import Social from "./social";


export default function Footer()
{
    return (
        <>
            <Button id='btn-hire' as='a' href='#send-msg'>HIRE ME</Button>
            <Social />
        </>
    );
}
