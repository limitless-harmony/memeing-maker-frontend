import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';

import Featured from 'pages/Featured';
import GlobalStyles from 'styles/globals';
import Navbar from 'components/Header';
import Authentication from '../components/Authentication';
import Modal from '../components/Modal';

const Routes = ({ showModal }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Featured} />
      </Switch>
      {showModal && (
        <Modal>
          <Authentication />
        </Modal>
      )}
    </React.Fragment>
  );
};

Routes.propTypes = {
  showModal: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  showModal: state.modal.show,
  router: state.router,
});

export default connect(mapStateToProps)(Routes);
