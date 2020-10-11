import React from 'react';
import Routes from "./routes/Routes";
import './App.css';
import { connect } from "react-redux";
import { fetchPackageRows } from "./store/packageList/actions";
import { FunctionComponent } from 'react';

const App: FunctionComponent<any> = props => {

  return <Routes />;
};

const mapDispatchToProps = {
  fetchPackageRows
};

export default connect(null, mapDispatchToProps)(App);
