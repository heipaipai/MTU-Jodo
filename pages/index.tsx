import Head from 'next/head'
import React from 'react'

export default function HomePage() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <div className="container">
        <div className="row text-center">
            <div className="col-md-12 mt-5">
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to <strong><u>MTU Jōdō</u></strong></h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr />
                </div>
            </div>
        </div>
    </div>
    </>
      
  )
}