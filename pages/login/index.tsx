"use client";
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Head from 'next/head'

function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

  const onSubmit = async () => {
    fetch('https://mtujodo.herokuapp.com/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.status === 201) alert("success");

      setEmail('');
      setPassword('');
    }).catch((err) => {
      console.log(err)
    })
}

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
                        <p className="lead text-center">Welcome back, Official! Please, use your credentials to login below.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-5">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Email Address" value={email} onChange={(e: any) => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Password" value={password} onChange={(e: any) => setPassword(e.target.value)} />
                        </Form.Group>

                        {}

                        <div className="d-grid gap-2">
                            <Button variant="dark" type="submit" onClick={onSubmit}>Login</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
      </>
    )

}

export default Login