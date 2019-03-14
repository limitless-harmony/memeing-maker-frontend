import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import styled from 'styled-components';

import routes from 'routes';
import { calculateRem, mobileWidth } from 'styles';

export const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <MainContainer>{routes}</MainContainer>
    </ConnectedRouter>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  font-size: inherit;
  padding: 0 ${calculateRem(14)};
  width: 100%;
  max-width: ${mobileWidth};
`;

App.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default App;
