import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import styled from 'styled-components';

import Routes from 'routes';
import { calculateRem, mobileWidth } from 'styles';

export const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <MainContainer>
        <Routes />
      </MainContainer>
    </ConnectedRouter>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-size: inherit;
  padding: 0 ${calculateRem(14)};
  width: 100%;
  max-width: ${calculateRem(mobileWidth)};
  box-sizing: border-box;
`;

App.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default App;
