import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import MainContainer from '../Main/containers/MainContainer';
import FormContainer from '../features/postForm/containers/FormContainer';

const AppContainer = styled.div`
  width: 100%;
  max-height: 100%;
  min-height: 97.7rem;
  display: flex;
`;

const App = () => (
  <Router>
    <AppContainer>
      <Route exact path="/" render={() => <MainContainer sortBy="letest" />} />
      <Route
        exact
        path="/latest"
        render={() => <MainContainer sortBy="latest" />}
      />
      <Route
        exact
        path="/trendy"
        render={() => <MainContainer sortBy="trendy" />}
      />
      <Route exact path="/new" render={() => <FormContainer />} />
    </AppContainer>
  </Router>
);
export default App;
