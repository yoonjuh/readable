import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../style';
import MainContainer from '../Main/containers/MainContainer';

const AppContainer = styled.div`
  min-width: 100%;
  max-width: 100%;
  height: 100%;
`;

const App = () => (
  <Router>
    <AppContainer>
      <GlobalStyle />
      <Route exact path="/" render={() => <MainContainer />} />
    </AppContainer>
  </Router>
);
export default App;
