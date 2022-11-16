import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Head from 'next/head'

function Login() {
    return (
      <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Login</h1>
                        <p className="lead text-center">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-5">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email Address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        {/* TODO: Change Link to validate user once auth is complete */}

                        <div className="d-grid gap-2">
                            <Button variant="dark" type="submit">Login</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
      </>
    )

}

export default Login