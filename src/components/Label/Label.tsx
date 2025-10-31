import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

interface StyledLabelProps {
  $disabled?: boolean;
  $backgroundColor?: string;
  $fontSize?: string;
}

const StyledLabel = styled.label<StyledLabelProps>`
  background-color: ${props =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#333333'};
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'default')};
  opacity: ${props => (props.$disabled ? 0.6 : 1)};
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  font-size: ${props => props.$fontSize || '14px'};
  font-weight: 500;
  display: inline-block;

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: ${props => props.$fontSize || '12px'};
  }
`;

export const Label: React.FC<LabelProps> = ({
  disabled = false,
  backgroundColor,
  children,
  htmlFor,
  fontSize,
  ...props
}) => {
  return (
    <StyledLabel
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      $fontSize={fontSize}
      htmlFor={htmlFor}
      data-testid="label"
      {...props}
    >
      {children}
    </StyledLabel>
  );
};
