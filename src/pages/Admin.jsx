import React from 'react';
import { connect } from 'react-redux';

import Memes from 'components/AdminAllMemes';
import Tagline from 'components/Tagline';
import Title from 'components/Title';

const Home = ({ history }) => (
  <>
    <Tagline />
    <Title />
    <Memes history={history} />
  </>
);

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(Home);
