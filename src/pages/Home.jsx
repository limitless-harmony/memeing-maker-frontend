import React from 'react';
import { connect } from 'react-redux';

import Memes from 'components/AllMemes';
import FeaturedMemes from 'components/Featured';
import Tagline from 'components/Tagline';
import Title from 'components/Title';

const Home = ({ authenticated, history }) => (
  <>
    <Tagline />
    <Title />
    {authenticated ? <Memes /> : <FeaturedMemes history={history} />}
  </>
);

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(Home);
