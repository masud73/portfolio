import React from "react";

import { Button } from 'react-bootstrap';
import Social from './social';
import Img from '../static/images/img-01.jpg';


export default function Header()
{
    return (<div className='header-content flex-start'><HeaderContent /></div>);
}

function HeaderContent()
{
    return (
        <>
            <div className='left-content'>
                <div className='big-img-container flex-center'><img id='big-img' src={Img} alt='Masud' /></div>
            </div>
            <RightContent />
        </>
    );
}

function RightContent()
{
    return (
        <>
            <div className='right-content'>
                <div className='text'>
                    <h1>Hi, I am <span style={{color: 'orange'}}>Masud</span>, A Web Developer Based In Nigeria</h1>
                    <p>Can give you static web pages and dynamic web apps.</p>
                </div>
                <Button id='btn-hire' as='a' href='#send-msg'>HIRE ME</Button>
                <div className='social-wrapper flex-column'><Social /></div>
            </div>
        </>
    );
}
