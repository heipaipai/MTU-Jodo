import Header from './header';
import Footer from './footer';
import Navbar from './nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function viewCompetitors() {
    return (
        <>
        <Header />
        <Navbar />
        <h2 className="text-center m-5">Add a table below with a list of registered competitors</h2>
        <Footer />
        </>
    )
}
