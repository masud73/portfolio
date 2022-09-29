import React from 'react';


import { MyProjects } from './components/projects';
import { MyStack } from './components/Stack';
import { AboutMe } from './components/About';
import { MessageForm } from './components/form';

import Header from './components/Header';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App()
{
    return (
        <React.Fragment>
            <header className='header'>
                <Header />
            </header>
            <main>
                <section className='flex-start'>
                    <AboutMe />
                    <MyStack />
                </section>

                {/* <section className='flex-column-center'>
                    <MyProjects />
                </section> */}

                <section className='form-container flex-column-center'>
                    <MessageForm />
                </section>
            </main>
            <footer className="footer flex-column-center">
                <Footer />
            </footer>
        </React.Fragment>
    );
}

export default App;