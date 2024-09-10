import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "../assets/css/components/loader.scss";

function Loader() {
  return (
    <div className="loader">
      <Spinner animation="border" role="status" size="2xl">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;
