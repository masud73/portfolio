import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";




export function MessageForm()
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        const _name = e.target.name;
        const value = e.target.value;

        switch (_name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);
        
        if (form.checkValidity() === true) {
            alert(`Hello ${name}, Your message was sent successfully. You'll be notified via email "${email}" when feedback is provided. Thanks.`);
            setName('');
            setEmail('');
            setMessage('');
        }
        
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <header className="form-header">
                <h2 style={{textAlign: 'left'}} id='send-msg'>Send Me a Message</h2>
            </header>
            <Form.Group className='mb-3'>
                <FloatingLabel label="What's your name?">
                    <Form.Control type='text' placeholder="What's your name?" name='name' value={name} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">Please provide a name</Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className='mb-3'>
                <FloatingLabel label='Email address'>
                    <Form.Control type='email' placeholder='Email address' name='email' value={email} onChange={handleChange} required />
                    <Form.Text className='text-muted'>Your email address will never be shared with anyone else.</Form.Text>
                    <Form.Control.Feedback type="invalid">Please provide a valid email address</Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className='mb-3'>
                <FloatingLabel label='Write your message here...'>
                    <Form.Control as='textarea' placeholder='Write your message here...' name='message' value={message} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">This field must not be empty</Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>
            <Button variant='primary' type='submit' id='btn-send'>Send</Button>
        </Form>
    );
}