import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

interface StyledImgWrapperProps {
  $disabled?: boolean;
  $backgroundColor?: string;
  $width?: string;
  $height?: string;
}

const StyledImgWrapper = styled.div<StyledImgWrapperProps>`
  background-color: ${props =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || 'transparent'};
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'default')};
  opacity: ${props => (props.$disabled ? 0.6 : 1)};
  border-radius: 4px;
  display: inline-block;
  overflow: hidden;

  img {
    width: ${props => props.$width || '100%'};
    height: ${props => props.$height || '100%'};
    display: block;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const Img: React.FC<ImgProps> = ({
  disabled = false,
  backgroundColor,
  src,
  alt,
  width,
  height,
  ...props
}) => {
  return (
    <StyledImgWrapper
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      $width={width}
      $height={height}
      data-testid="img"
      {...props}
    >
      <img src={src} alt={alt} />
    </StyledImgWrapper>
  );
};
