import PropTypes from "prop-types";
import { Link } from "react-router-dom";

ErrorElement.propTypes = {
  error: PropTypes.instanceOf(Error),
};

export default function ErrorElement(error) {
  const message = error?.message || "This page does not exist";
  let solution = <Link to="/"> Return to Homepage </Link>;

  // change solution depending on error cause
  return (
    <>
      <h2>{message}</h2>
      <p>{solution}</p>
    </>
  );
}
