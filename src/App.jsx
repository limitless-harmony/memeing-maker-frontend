import React from 'react';
import styled from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';

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
      </MainContainer>
    </ConnectedRouter>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-size: inherit;
  padding: ${calculateRem(46)} ${calculateRem(14)} ${calculateRem(20)};
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
