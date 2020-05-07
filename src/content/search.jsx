import React from "react";
import PropTypes from "prop-types";

const Search = () => {
  return (
    <section>
      <form className="form-inline my-2 my-lg-0 ml-sm-5">
        <div className="form-group row">
          <div className="col-lg-11">
            <input
              className="form-control ml-lg-4"
              aria-label="Search"
              type="text"
              placeholder="search"
              onChange=""
              style={{ width: "100%", height: "50px", borderRadius: "15px" }}
              //   value=""
            />
          </div>
          <div className="col-lg-1 mr-lg-auto">
            <button
              className="btn my-2 my-sm-0 button-search justify-content-between"
              type="submit"
              style={{ fontSize: "29px" }}
            >
              <svg
                className="bi bi-search"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Search;
