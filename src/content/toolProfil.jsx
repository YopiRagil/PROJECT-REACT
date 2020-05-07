import React from "react";

const ToolProfil = (props) => {
  return (
    <section>
      <h4>{props.title}</h4>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle mr-lg-5"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ fontSize: "20px" }}
            >
              Profil
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                My Profil
              </a>
              <a class="dropdown-item" href="#">
                logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ToolProfil;
