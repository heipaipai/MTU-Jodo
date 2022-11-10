import Header from './header';
import Footer from './footer';
import Navbar from './nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function RegisterCompetitor() {
    return (
        <>
        <Header />
        <Navbar />
        <h2 className="text-center m-5">Register A New Competitor</h2>
        <RegisterCompetitorForm />
        <Footer />
        </>
    )
}

const RegisterCompetitorForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [beltGrade, setBeltGrade] = useState('');
    const [country, setCountry] = useState('');
    
    
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(firstName, lastName, beltGrade, country);
    }
    return (
        <Form className="m-5" onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" onChange={(e:any) => setFirstName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" onChange={(e:any) => setLastName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBeltGrade">
                <Form.Label>Belt Grade</Form.Label>
                <Form.Control type="number" min="0" max="9"placeholder="Enter Belt Grade" onChange={(e:any) => setBeltGrade(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter Country" onChange={(e:any) => setCountry(e.target.value)} />
            </Form.Group>

            {/* full length button bootstrap-react */}
            <Button variant="primary" type="submit" className="w-100 mt-5">
                Register Competitor
            </Button>
        </Form>
    )
}
