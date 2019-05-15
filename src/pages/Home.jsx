import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { calculateRem } from 'styles';
import { name, tagline } from 'helpers';
import Memes from 'components/AllMemes';
import FeaturedMemes from 'components/Featured';

const Home = ({ authenticated }) => (
  <>
    <Tagline>{tagline}</Tagline>
    <Title>{name}</Title>
    {authenticated ? <Memes /> : <FeaturedMemes />}
  </>
);

const Title = styled.div`
  margin: ${calculateRem(10)} auto ${calculateRem(60)};
  line-height: ${calculateRem(43)};
  font-size: ${calculateRem(36)};
`;

const Tagline = styled.div`
  margin: 0 auto;
`;

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(Home);
