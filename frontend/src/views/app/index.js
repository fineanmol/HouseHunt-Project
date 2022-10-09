import React, { Suspense, useState } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from 'layout/AppLayout';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);
const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ './pages')
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './main/blank-page')
);
const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './main/home-page')
);
const SearchPage = React.lazy(() =>
  import(/* webpackChunkName: "search-page" */ './main/search-page')
);
const ThankYouPage = React.lazy(() =>
  import(/* webpackChunkName: "thankyou-page" */ './main/thankyou-page')
);

const App = ({ match }) => {
  const [userEmail, setUserEmail] = useState('');
  console.log('[App-Match]', { match, userEmail });
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboards`}
            />
            <Route
              path={`${match.url}/dashboards`}
              render={(props) => <Dashboards {...props} />}
            />
            <Route
              path={`${match.url}/applications`}
              render={(props) => <Applications {...props} />}
            />
            {/* <ProtectedRoute
                    path={`${match.url}/applications`}
                    component={Applications}
                    roles={[UserRole.Admin]}
            /> */}
            <Route
              path={`${match.url}/pages`}
              render={(props) => <Pages {...props} />}
            />
            <Route
              path={`${match.url}/ui`}
              render={(props) => <Ui {...props} />}
            />
            <Route
              path={`${match.url}/menu`}
              render={(props) => <Menu {...props} />}
            />
            <Route
              path={`${match.url}/blank-pages`}
              render={(props) => <BlankPage {...props} />}
            />
            <Route
              path={`${match.url}/home`}
              render={(props) => (
                <HomePage
                  {...props}
                  setUserEmail={setUserEmail}
                  userEmail={userEmail}
                />
              )}
            />
            <Route
              path={`${match.url}/search/`}
              render={(props) => (
                <SearchPage {...props} userEmail={userEmail} />
              )}
            />
            <Route
              path={`${match.url}/thank-you/`}
              render={(props) => (
                <ThankYouPage {...props} userEmail={userEmail} />
              )}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
