import React from "react";

const SecondsCounter = ({ seconds }) => {
  return (
    <div className="container fa-lg m-4">
      <div className="row bg-dark text center text-white p-5 mx-auto rounded">
        <div className="col-1 d-flex justify-content-center align-items-center p-5 dark rounded shadow">
          <i className="fa-regular fa-clock fa-lg"></i>
        </div>
        <div className="col d-flex justify-content-center align-items-center p-4 dark rounded shadow">
          <i class="fa-solid fa-0"></i>
        </div>
        <div className="col d-flex justify-content-center align-items-center p-4 dark rounded shadow">
          <i class="fa-solid fa-0"></i>
        </div>
        <div className="col d-flex justify-content-center align-items-center p-4 dark rounded shadow">
          <i class="fa-solid fa-0"></i>
        </div>
        <div className="col d-flex justify-content-center align-items-center p-4 dark rounded shadow">
          <i class="fa-solid fa-0"></i>
        </div>
        <div className="col d-flex justify-content-center align-items-center p-4 dark rounded shadow">
          {Math.floor(seconds / 10) % 10}
        </div>
        <div className="col d-flex justify-content-center align-items-center p-4 dark rounded shadow large-number">
          {Math.floor(seconds / 1) % 10}
        </div>
      </div>
    </div>
  );
};

export default SecondsCounter;
