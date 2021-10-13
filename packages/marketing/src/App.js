import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
