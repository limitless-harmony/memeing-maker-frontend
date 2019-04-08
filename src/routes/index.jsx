import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Featured from 'pages/Featured';
import GlobalStyles from 'styles/globals';
import AuthRoutes from 'routes/Auth';
import Navbar from 'components/Header';
import Authentication from 'components/Authentication';
import RootModal from 'components/Modal';
import SelectImageModal from 'components/SelectImage';
import ShareModal from 'components/Share';

const Routes = ({ showModal, modalId }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Featured} />
        <Route component={AuthRoutes} />
      </Switch>
      {showModal && (
        <RootModal>
          {modalId === 'auth' && <Authentication />}
          {modalId === 'select-image' && <SelectImageModal />}
          {modalId === 'share' && <ShareModal />}
        </RootModal>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  showModal: state.modal.show,
  modalId: state.modal.id,
});

export default connect(mapStateToProps)(Routes);
