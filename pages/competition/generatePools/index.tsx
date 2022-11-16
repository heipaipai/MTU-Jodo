import Head from 'next/head'
import React from 'react'

function GeneratePools() {
  return (
    <>
      <Head>
        <title>Generate Pools</title>
      </Head>

    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <div className="jumbotron">
            <h1 className="display-4">Generate Pools</h1>
            <p className="lead"></p>
            <hr className="my-4" />
            <p></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pool 1</h5>
              <p className="card-text"></p>
              <a href="#" className="btn btn-primary">Go to the Pool</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pool 2</h5>
              <p className="card-text"></p>
              <a href="#" className="btn btn-primary">Go to the pool</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pool 3</h5>
              <p className="card-text"></p>
              <a href="#" className="btn btn-primary">Go to the pool</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pool 4</h5>
              <p className="card-text"></p>
              <a href="#" className="btn btn-primary">Go to the pool</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default GeneratePools