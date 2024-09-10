import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../assets/images/404.png";

const NotFound = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="text-center row">
          <div className="col-md-6">
            <img src={NotFoundImg} alt="Not found" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <p className="fs-3">
                <span className="text-danger">Opps!</span> Page not found.
              </p>
              <p className="lead">
                The page you are looking for does not exist.
              </p>
              <Link to="/" className="btn btn-warning">
                Return to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
