import { useParams } from "react-router-dom";
import Header from "../components/Header";

const PlayerDetails = () => {
  const { playerId } = useParams();
  // console.log(playerId);

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

  const selectedPlayer = playersData.find((player) => player.id == playerId);
  return (
    <>
      <Header />
      <main className="container">
        <h2 className="my-3">Player Details</h2>
        <div className="card">
          <div className="card-header">
            <h2>{selectedPlayer.name}</h2>
          </div>

          <div className="card-body">
            <div className="card-text">
              <p>
                <strong>Country: </strong>
                {selectedPlayer.country}
              </p>
              <p>
                <strong>Role: </strong>
                {selectedPlayer.role}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PlayerDetails;
