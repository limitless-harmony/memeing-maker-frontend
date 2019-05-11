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
        {showMenu && <OverlayMenu />}
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
  padding: 0 ${calculateRem(14)};
  width: 100%;
  max-width: ${calculateRem(mobileWidth)};
  box-sizing: border-box;
`;

const mapStateToProps = state => ({
  showModal: state.modal.show,
  showMenu: state.menu.show,
  modalId: state.modal.id,
  loading: state.loading.status,
});

export default connect(mapStateToProps)(App);
