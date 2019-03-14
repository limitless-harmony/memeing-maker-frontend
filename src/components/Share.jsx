import React from 'react';
import styled from 'styled-components';

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from 'components/share-icons';
import { calculateRem } from 'styles';
import ShareButtons from 'components/ShareButton';

const Share = () => (
  <StyledShare>
    <IconSection>
      <ShareButtons network="facebook">
        <FacebookIcon round />
      </ShareButtons>
      <ShareButtons network="twitter">
        <TwitterIcon round />
      </ShareButtons>
      <ShareButtons network="whatsapp">
        <WhatsAppIcon round />
      </ShareButtons>
      <ShareButtons network="linkedin">
        <LinkedinIcon round />
      </ShareButtons>
    </IconSection>
  </StyledShare>
);

const StyledShare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

const IconSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: ${calculateRem(20)} ${calculateRem(40)};
  min-height: ${calculateRem(80)};
  box-sizing: border-box;
`;

export default Share;
