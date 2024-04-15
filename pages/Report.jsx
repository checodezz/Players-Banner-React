import Header from "../components/Header";

const Report = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h2 className="my-3">Player Report</h2>
        <hr />
        <div className="row">
          <div className="col col-md-6">
            <div className="card ">
              <div className="card-header">
                <h2>Top Scorer</h2>
              </div>
              <div className="card-body">
                <div className="card-text">
                  <p>
                    <strong>Name: </strong> Player 1
                  </p>
                  <p>
                    <strong>Total Runs: </strong> 12000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-6">
            <div className="card ">
              <div className="card-header">
                <h2>Best Bowler</h2>
              </div>
              <div className="card-body">
                <div className="card-text">
                  <p>
                    <strong>Name: </strong> Player 2
                  </p>
                  <p>
                    <strong>Total Wickets: </strong> 500
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Report;
