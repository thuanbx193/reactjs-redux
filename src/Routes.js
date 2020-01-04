import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './router';
import { Main as MainLayout, Minimal as MinimalLayout } from './react/layouts';

import {
  HomePage as HomePageView,
  NotFound as NotFoundView,
} from './react/view';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/home"
      />
      <RouteWithLayout
        component={HomePageView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
