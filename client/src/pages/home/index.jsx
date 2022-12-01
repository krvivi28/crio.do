import React from "react";
import "./home.css";
import Button from "react-bootstrap/Button";
// import Footer from "../../common/footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        id="welcome"
        style={{ height: "100vh" }}
        className="bg-dark text-secondary px-4 py-2 text-center"
      >
        <div id="welcome" className="py-5">
          <h1 id="head" className="display-1 fw-bold text-white opacity-75">
            CRIO.DO
          </h1>
          <h2 id="h2" className="display-5 fw-bold text-info">
            XHARK TANK
          </h2>

          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-2 comm">
              XharkTank is a panel of potential investors, termed as "Sharks",
              who listen to entrepreneurs pitch ideas for a business or product
              they wish to develop.
            </p>
            <p className="text-info comm">
              Tap the Pitch Your Idea button to create a new pitch.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <p></p>

              <Link to="/apply">
                <Button size="lg" variant="outline-info my-1 mx-2">
                  + Pitch Your Idea <i class="bi bi-arrow-right"></i>
                </Button>{" "}
              </Link>
              <Link to="/invest">
                <Button size="lg" variant="outline-info my-1 mx-2">
                  Invest Now <i class="bi bi-arrow-right"></i>
                </Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Home;
