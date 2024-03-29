import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

import { Button } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Alert } from "react-bootstrap";



export function MessageForm()
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [err, setErr] = useState();

    const [tmpEmail, setTmpEmail] = useState('');


    const handleChange = (e) => {
        const _name = e.target.name;
        const value = e.target.value;

        switch (_name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                setTmpEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                return;
        }
    }

    // const _form = useRef();
    // const service_id = process.env.REACT_APP_SERVICE_ID;
    // const template_id = process.env.REACT_APP_TEMPLATE_ID;
    // const public_key = process.env.REACT_APP_PUBLIC_KEY;

    const _form = useRef();
    const service_id = 'service_pngrbmn'
    const template_id = 'template_eqtmilf'
    const public_key = 'cfJHIC53UpCP6Vmaf'

    const sendEmail = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) e.stopPropagation();

        setValidated(true);
        
        if (form.checkValidity() === true) {
            emailjs.sendForm(service_id, template_id, _form.current, public_key)
            .then(() => {
                setShow(true);
                setName('');
                setEmail('');
                setMessage('');
            }, (err) => {
                setErr(err.status);
                setShowError(true);
                console.log(err);
            });
        }
    };

    return (
        <Form ref={_form} noValidate validated={validated} onSubmit={sendEmail}>
            <header className="form-header">
                <h2 style={{textAlign: 'left'}} id='send-msg'>Send Me a Message</h2>
            </header>
            <Alert transition dismissible variant="success" show={show} onClose={() => setShow(false)}>
                <Alert.Heading>Message sent</Alert.Heading>
                <p>Thanks for reaching me out! <br />
                    Your message was sent successfully! You will be contacted via
                     "{tmpEmail}" as soon as possible.
                </p>
            </Alert>
            <Alert transition dismissible variant="danger" show={showError} onClose={() => setShowError(false)}>
                <Alert.Heading>Message not sent</Alert.Heading>
                <p>Could not send message at this time. Please try again. Error code: {err}</p>
                <hr />
                <p className="mb-0">For more info, please send an email to <Alert.Link href="mailto:masud727333@gmail.com">masud727333@gmail.com</Alert.Link></p>
            </Alert>
            <Form.Group className='mb-3'>
                <FloatingLabel label="What's your name?">
                    <Form.Control type='text' placeholder="What's your name?" name='name' value={name} onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">Please provide a name</Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className='mb-3'>
                <FloatingLabel label='Email address'>
                    <Form.Control type='email' placeholder='Email address' name='email' value={email} onChange={handleChange} required />
                    <Form.Text className='text-muted'>This email address will be used to send you back response.</Form.Text>
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