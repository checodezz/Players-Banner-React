import { Link } from "react-router-dom";
import Header from "../components/Header";

const PlayerList = () => {
  const playersData = [
    {
      id: 1,
      name: "Player 1",
      role: "Batsman",
      country: "India",
    },
    {
      id: 2,
      name: "Player 2",
      role: "Bowler",
      country: "Australia",
    },
  ];
  return (
    <>
      <Header />
      <main className="container">
        <h2 className="my-3">List of Cricket Players</h2>
        <div className="">
          {playersData.map((player) => {
            return (
              <div key={player.id} className="card col-md-6 my-3">
                <div className="card-header">
                  <h2>{player.name}</h2>
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <p>
                      <strong>Country: </strong>
                      {player.country}
                    </p>
                    <p>
                      <strong>Role: </strong>
                      {player.role}
                    </p>
                    <Link
                      to={`playerdetails/${player.id}`}
                      className="btn btn-primary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default PlayerList;
