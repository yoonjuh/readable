import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import MainContainer from '../Main/containers/MainContainer';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => (
  <Router>
    <AppContainer>
      <Route exact path="/" render={() => <MainContainer />} />
    </AppContainer>
  </Router>
);
export default App;
