import PropTypes from "prop-types";
import { Link } from "react-router-dom";

ErrorElement.propTypes = {
  error: PropTypes.instanceOf(Error),
};

export default function ErrorElement({ error }) {
  let message, solution;

  switch (error?.message) {
    case "Failed to fetch": {
      message = "Could not get items.";
      solution = (
        <>
          Check internet and{" "}
          <Link to="/store" reloadDocument>
            reload page
          </Link>
        </>
      );
      break;
    }
    case undefined: {
      message = "This page does not exist";
      solution = <Link to="/"> Return to Homepage </Link>;
      break;
    }
    default: {
      message = error.message;
      solution = <Link to="/"> Return to Homepage </Link>;
    }
  }

  return (
    <div className="error-card">
      <h2>{message}</h2>
      <p>{solution}</p>
    </div>
  );
}
