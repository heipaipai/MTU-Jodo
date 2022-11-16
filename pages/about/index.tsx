import Head from 'next/head'
import React from 'react'

function About() {
  return (
    <>
    <Head>
      <title>About</title>
    </Head>
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <div className="jumbotron">
            <h1 className="display-4">About Us</h1>
            <p className="lead">A system for managing, recording and displaying the pools and knockout figures for the European Jōdō Championships 2023 in Switzerland.</p>
            <hr className="my-4" />
            <p>The European Kendo Federation (EKF) has approached us to create a system for managing, recording and displaying the pools and knockout figures for the European Jōdō Championships 2023 in Switzerland. They would like their officials to be able to register and subsequently alter competitors information using a simple, easy-to-use and intuitive user interface which saves their details in a database. The system should show us the name and country of the competitor, their position in the pool and their position in the pool and the flags they have won and their colour in the arena. Using the information collected the system should be able to generate a knockout figure/diagram according to the rules of the Jōdō competition. The EKF have also requested that the system be able to record absences.</p>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default About