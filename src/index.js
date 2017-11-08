import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Router from 'containers/Router';

ReactDOM.render(
  <AppContainer>
    <Router />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept();
}
