import Head from 'next/head'
import React, { useEffect, useState } from 'react'

function ViewCompetitor() {
  const [competitors, setCompetitors] = useState<any[]>([])
  
  useEffect(() => {
    fetch('https://mtujodo.herokuapp.com/api/competitors')
      .then(res => res.json())
      .then(({ data}: any) => setCompetitors(data))
      .catch(err => console.log(err))
  }, [])

  const renderedCompetitors = competitors.map(competitor => (
    <div className="col-md-6 mt-5" key={`${competitor.name} ${competitor.lastName}`}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ competitor.name } { competitor.lastName }</h5>
          <p className="card-text">
            Belt Grade: { competitor.beltGrade } <br />
            Country: { competitor.country }
          </p>
        </div>
      </div>
    </div>
  ))

  return (
    <>
    <Head>
      <title>View Competitor</title>
    </Head>
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <div className="jumbotron">
            <h1 className="display-4">View Competitors</h1>
          </div>
        </div>
      </div>

      <div className="row">
        {renderedCompetitors}
      </div>
    </div>
    </>
  )
}

export default ViewCompetitor