import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#007bff'};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  children,
  ...props
}) => {
  return (
    <StyledButton disabled={disabled} data-testid="button" {...props}>
      {children}
    </StyledButton>
  );
};
