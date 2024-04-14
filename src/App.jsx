import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <img
          src="https://placehold.co/1600x400?text=Players+Banner"
          className="img-fluid"
        />

        <div className="text-center my-5">
          <h2>Cricket Players Database</h2>
          <p>Explore the profiles of your favorite cricket players.</p>
          <Link to="/playerlist" className="btn btn-primary">
            Explore Players
          </Link>
        </div>

        <div className="text-center my-5 py-5">
          <h2>Players Report</h2>
          <p>
            Explore our latest player report to gain insights into our ICC's
            performance and growth.
          </p>
          <Link to="/report" className="btn btn-primary">
            View Report{" "}
          </Link>
        </div>
      </main>
      <Footer/>
    </>
  );
}
