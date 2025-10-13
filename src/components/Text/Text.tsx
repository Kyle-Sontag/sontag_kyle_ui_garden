import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

interface StyledTextProps {
  $disabled?: boolean;
  $backgroundColor?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $color?: string;
}

const StyledText = styled.span<StyledTextProps>`
  background-color: ${props => props.$disabled ? '#cccccc' : props.$backgroundColor || 'transparent'};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'default'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  padding: 2px 5px;
  border-radius: 4px;
  color: ${props => props.$color || '#333333'};
  font-size: ${props => props.$fontSize || '15px'};
  font-weight: ${props => props.$fontWeight || '400'};
  display: inline-block;

  @media (max-width: 768px) {
    padding: 2px 4px;
    font-size: ${props => props.$fontSize || '14px'};
  }
`;

export const Text: React.FC<TextProps> = ({disabled = false, backgroundColor, children, fontSize, fontWeight, color, ...props}) => {
  return (
    <StyledText
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $color={color}
      data-testid="text"
      {...props}
    >
      {children}
    </StyledText>
  );
};