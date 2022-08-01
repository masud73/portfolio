import React from "react";
import { Envelope, Github, Telephone, Twitter } from 'react-bootstrap-icons';


export default function Social()
{
    return (
       <>
            <header>
                <span className='title'>Connect with me</span>
            </header>
            <div className='social-icons-container flex-start-center'>
                <div className='flex-center' title='Github - masud73'>
                    <a href='https://www.github.com/masud73' rel='noopener noreferrer' className='flex-start-center' target='_blank'><Github id='github'/></a>
                </div>
                <div className='flex-center' title='Twitter - @____masud'>
                    <a href='https://www.twitter.com/____masud' rel='noopener noreferrer' className='flex-start-center' target='_blank'><Twitter id='twitter'/></a>
                </div>
                <div className='flex-center' title='Email at: mohdabbakarr@gmail.com'>
                    <a href='mailto:mohdabbakarr@gmail.com' rel='noopener noreferrer' className='flex-start-center'><Envelope id='email'/></a>
                </div>
                <div className='flex-center' title='Call +234 706 565 6558'>
                    <a href='tel:+2347065656558' rel='noopener noreferrer' className='flex-start-center'><Telephone id='phone'/></a>
                </div>
            </div>
       </>
    );
}