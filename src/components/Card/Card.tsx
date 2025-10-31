import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

interface StyledCardProps {
  $disabled?: boolean;
  $backgroundColor?: string;
}

const StyledCard = styled.div<StyledCardProps>`
  background-color: ${props =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#ffffff'};
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'default')};
  opacity: ${props => (props.$disabled ? 0.6 : 1)};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 15px;
  }

  h3 {
    margin: 0 0 10px 0;
    color: #333;
    font-size: 20px;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 14px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export const Card: React.FC<CardProps> = ({
  disabled = false,
  backgroundColor,
  title,
  content,
  imageUrl,
  ...props
}) => {
  return (
    <StyledCard
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      data-testid="card"
      {...props}
    >
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
};
