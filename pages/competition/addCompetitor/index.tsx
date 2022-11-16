"use client";
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Head from 'next/head';

function AddCompetitor() {
  const [name, setName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [beltGrade, setBeltGrade] = React.useState('')
  const [country, setCountry] = React.useState('')

  const onSubmit = async () => {
    fetch('http://localhost:3000/api/competitors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, lastName, beltGrade, country }),
    }).then((res) => {
      if (res.status === 201) alert("success");

      setName('');
      setLastName('');
      setBeltGrade('');
      setCountry('');

    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
    <Head>
      <title>Add Competitor</title>
    </Head>

    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <div className="jumbotron">
            <h1 className="display-4 text-center">Add Competitor</h1>
            <p className="lead text-center">Please fill out the form below to add a competitor.</p>
            <hr className="my-4" />
          </div>
        </div>
      </div>
      <div className="row p-5">
      
      <Form.Group controlId="formBasicEmail" className="mb-3">
        <Form.Control type="text" placeholder="Enter First Name" value={name} onChange={(e: any) => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail" className="mb-3">
        <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={(e: any) => setLastName(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail" className="mb-3">
        <Form.Control type="text" placeholder="Enter Belt Grade" value={beltGrade} onChange={(e: any) => setBeltGrade(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail" className="mb-3">
        <Form.Control type="text" placeholder="Enter Country" value={country} onChange={(e: any) => setCountry(e.target.value)}/>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button className="mt-5 p-2"variant="dark" onClick={onSubmit}>Submit</Button>
      </div>
    
    </div>
    </div>
    </>
  
  )
}

export default AddCompetitor