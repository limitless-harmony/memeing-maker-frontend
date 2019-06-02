import React from 'react';
import styled from 'styled-components';

import TextArea from 'components/TextArea';
import { GoArrow } from 'components/Icons';
import { inputFill, dark } from 'styles/colors';
import { calculateRem } from 'styles';

const MemeForm = ({
  image,
  topText,
  bottomText,
  size,
  onChange,
  submitText,
  onSubmit,
  selectImage,
}) => (
  <>
    <TextArea
      value={topText}
      name="topText"
      size={size}
      onChange={onChange}
      placeholder="click to enter text"
    />
    <svg
      onClick={selectImage}
      style={{ display: 'block' }}
      width="100%"
      id="svg_ref"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <image x="0" y="0" xlinkHref={image} width="100%" height="100%" />
    </svg>
    <TextArea
      value={bottomText}
      name="bottomText"
      onChange={onChange}
      size={size}
      placeholder="click to enter text"
    />
    <ButtonContainer>
      <Text>
        Post to <span>{submitText}</span>
      </Text>
      <SubmitMeme onClick={onSubmit}>
        <GoArrow />
      </SubmitMeme>
    </ButtonContainer>
  </>
);

export const PreviewContainer = styled.div`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  padding: ${calculateRem(30)} ${calculateRem(28)};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;

const Text = styled.div`
  color: ${dark};
  min-width: 50%;
  text-align: center;
  span {
    background-color: ${inputFill};
    margin: 0 ${calculateRem(14)};
    padding: ${calculateRem(5)} ${calculateRem(25)};
    border-radius: ${calculateRem(10)};
  }
`;

const SubmitMeme = styled.button`
  text-align: center;
  cursor: pointer;
  border: none;
  background: none;
  padding: ${calculateRem(5)};
  svg {
    display: block;
  }
`;

export default MemeForm;
