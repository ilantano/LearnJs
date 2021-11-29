import React from "react";
import { Provider } from "react-redux";
import withReduxStore from "../utils/with-redux-store";
import PropTypes from "prop-types";

const App = ({ Component, reduxStore, pageProps }) => {
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
};

App.propTypes = {
  Component: PropTypes.any,
  reduxStore: PropTypes.any,
  pageProps: PropTypes.any,
};

export default withReduxStore(App);
