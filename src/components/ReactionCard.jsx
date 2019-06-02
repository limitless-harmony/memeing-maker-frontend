import React from 'react';
import styled from 'styled-components';

import { ThanksReaction } from 'components/Icons';
import { dark, black } from 'styles/colors';
import { calculateRem } from 'styles';

const ReactionCard = ({
  count,
  total,
  id,
  onClick,
  onMouseDown,
  onMouseUp,
}) => (
  <ReactionButton
    id={id}
    onClick={onClick}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
  >
    <ThanksReaction />
    <ReactionCount id="clap--count">
      {count ? <div>+{count}</div> : null}
    </ReactionCount>
    <ReactionCountTotal>{Number(total).toLocaleString()}</ReactionCountTotal>
  </ReactionButton>
);

const ReactionButton = styled.button`
  position: relative;
  outline: ${calculateRem(1)} solid transparent;
  border-radius: 50%;
  box-shadow: ${calculateRem(2)} ${calculateRem(4)} ${calculateRem(4)} 0 ${dark};
  background: #fff;
  transition: border 0.1s ease-in;
  top: 0;
  left: 0;
  width: ${calculateRem(53)};
  text-align: center;
  height: ${calculateRem(53)};
  border: ${calculateRem(2)} solid ${dark};

  &:hover {
    cursor: pointer;
  }
`;

const ReactionCount = styled.span`
  font-size: ${calculateRem(11)};
  font-weight: bold;
  line-height: ${calculateRem(13)};
  color: ${black};
  top: 10%;
  left: 50%;
  position: absolute;
  backface-visibility: hidden;
`;

const ReactionCountTotal = styled.div`
  font-size: ${calculateRem(11)};
  margin: ${calculateRem(20)} auto 0;
  line-height: ${calculateRem(13)};
  font-weight: bold;
`;

export default ReactionCard;
