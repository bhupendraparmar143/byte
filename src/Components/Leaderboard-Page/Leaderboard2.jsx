import React from 'react'
import './Leaderboard.css'
const H1 = () => {
  return (
    <section>
      <div className="container">
        <div className="leaderboard-main">
          <div className="center">
            <h3 className="heading-component wow animate__animated animate__fadeInDown">Leaderboard</h3>
          </div>
          <table className="table table-striped">
            <thead>
              <tr className="row-data wow animate__animated animate__zoomIn">
                <th className="col md-2">Rank</th>
                <th className="col md-4">Name</th>
                <th className="col md-2">Contest</th>
                <th className="col md-2">Points</th>
                <th className="col md-2">Win</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row-data wow animate__animated animate__flipInX">
                <td>01</td>
                <td>Demo</td>
                <td>Demo</td>
                <td>10</td>
                <td>1</td>
              </tr>
              <tr className="row-data wow animate__animated animate__flipInX">
                <td>02</td>
                <td>Demo</td>
                <td>Demo</td>
                <td>10</td>
                <td>1</td>
              </tr>
              <tr className="row-data wow animate__animated animate__flipInX">
                <td>03</td>
                <td>Demo</td>
                <td>Demo</td>
                <td>10</td>
                <td>1</td>
              </tr>
              <tr className="row-data wow animate__animated animate__flipInX">
                <td>04</td>
                <td>Demo</td>
                <td>Demo</td>
                <td>10</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

  )
}

export default H1
