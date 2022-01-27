
import React, { Fragment } from 'react';
// import { Router  } from '@reach/router';
/** importing our pages */
import Tracks from './tracks';
import { BrowserRouter as Router } from "react-router-dom";

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
    </Router>
  );
}
