import PropTypes from "prop-types";

export default function App({ children }) {
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main>{children}</main>
    </>
  );
}

App.propTypes = {
  children: PropTypes.element,
};
