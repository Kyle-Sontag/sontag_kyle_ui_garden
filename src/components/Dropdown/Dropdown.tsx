import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

interface StyledDropdownProps {
  $disabled?: boolean;
  $backgroundColor?: string;
}

const StyledDropdown = styled.select<StyledDropdownProps>`
  background-color: ${props => props.$disabled ? '#cccccc' : props.$backgroundColor || '#ffffff'};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  width: 200px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    width: 100%;
    font-size: 14px;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({disabled = false, backgroundColor, options, placeholder = 'Select option', value, onChange, ...props}) => {
  return (
    <StyledDropdown
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      disabled={disabled}
      value={value}
      onChange={onChange}
      data-testid="dropdown"
      {...props}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </StyledDropdown>
  );
};