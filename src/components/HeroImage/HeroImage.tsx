import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

interface StyledHeroImageProps {
  $disabled?: boolean;
  $backgroundColor?: string;
}

const StyledHeroImage = styled.div<StyledHeroImageProps>`
  background-color: ${props =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#000000'};
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'default')};
  opacity: ${props => (props.$disabled ? 0.6 : 1)};
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    padding: 20px;
  }

  h1 {
    margin: 0 0 10px 0;
    color: white;
    font-size: 48px;
  }

  h2 {
    margin: 0;
    color: white;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    height: 300px;

    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 18px;
    }
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  disabled = false,
  backgroundColor,
  title,
  subtitle,
  src,
  alt,
  ...props
}) => {
  return (
    <StyledHeroImage
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      data-testid="hero-image"
      {...props}
    >
      <img src={src} alt={alt} />
      {(title || subtitle) && (
        <div className="overlay">
          {title && <h1>{title}</h1>}
          {subtitle && <h2>{subtitle}</h2>}
        </div>
      )}
    </StyledHeroImage>
  );
};
