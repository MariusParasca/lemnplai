import React from 'react';

const navigationBar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Lemnplai
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link active" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              About us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navigationBar;
