import React from 'react';
import styled from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RootModal from 'components/Modal';
import SelectImageModal from 'components/SelectImage';
import ShareModal from 'components/Share';
import OverlayMenu from 'components/Menu';
import Loading from 'components/Loading';
import { calculateRem, mobileWidth } from 'styles';
import routes from 'routes';

export const App = ({ history, showMenu, loading, showModal, modalId }) => {
  return (
    <ConnectedRouter history={history}>
      <MainContainer>
        {showMenu && <OverlayMenu history={history} />}
        {loading && <Loading />}
        {routes}
        {showModal && (
          <RootModal>
            {modalId === 'select-image' && <SelectImageModal />}
            {modalId === 'share' && <ShareModal />}
          </RootModal>
        )}
        <ToastContainer autoClose={5000} />
      </MainContainer>
    </ConnectedRouter>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-size: inherit;
  padding: ${calculateRem(30)} ${calculateRem(24)} ${calculateRem(50)};
  width: 100%;
  max-width: ${calculateRem(mobileWidth)};
  box-sizing: border-box;
`;

const mapStateToProps = state => ({
  showModal: state.common.showModal,
  showMenu: state.common.showMenu,
  modalId: state.common.modalId,
  loading: state.common.loading,
});

export default connect(mapStateToProps)(App);
