"use client";
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function AddCompetitor() {
  return (
    // hero image at top of page
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
      <Form>
      <Form.Group controlId="formBasicEmail" className="mb-3">
        <Form.Control type="text" placeholder="Enter First Name" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail" className="mb-3">
        <Form.Control type="text" placeholder="Enter Last Name" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail" className="mb-3">
        <Form.Control type="text" placeholder="Enter Belt Grade" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail" className="mb-3">
        <Form.Control type="text" placeholder="Enter Country" />
      </Form.Group>
      <div className="d-grid gap-2">
      <Button className="mt-5 p-2"variant="dark" type="submit">Submit</Button>
      </div>
    </Form>
    </div>
    </div>


  )
}

export default AddCompetitor

