import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

interface StyledRadioButtonProps {
  $disabled?: boolean;
  $backgroundColor?: string;
}

const StyledRadioButton = styled.label<StyledRadioButtonProps>`
  background-color: ${props => props.$disabled ? '#cccccc' : props.$backgroundColor || 'transparent'};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 4px;

  input[type="radio"] {
    margin-right: 8px;
    cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
    width: 18px;
    height: 18px;
  }

  span {
    font-size: 16px;
    color: #333;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;

    input[type="radio"] {
      width: 16px;
      height: 16px;
    }

    span {
      font-size: 14px;
    }
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({disabled = false, backgroundColor, label, name, value, checked = false, onChange, ...props}) => {
  return (
    <StyledRadioButton
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      data-testid="radio-button"
    >
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      <span>{label}</span>
    </StyledRadioButton>
  );
};