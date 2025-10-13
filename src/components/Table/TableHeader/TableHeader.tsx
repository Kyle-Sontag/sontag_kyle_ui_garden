import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

interface StyledTableHeaderProps {
  $disabled?: boolean;
  $backgroundColor?: string;
}

const StyledTableHeader = styled.thead<StyledTableHeaderProps>`
  background-color: ${props => props.$disabled ? '#cccccc' : props.$backgroundColor || '#f0f0f0'};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'default'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  font-weight: bold;

  th {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 14px;

    th {
      padding: 8px;
    }
  }
`;

export const TableHeader: React.FC<TableHeaderProps> = ({disabled = false, backgroundColor, children, ...props}) => {
  return (
    <StyledTableHeader
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      data-testid="table-header"
      {...props}
    >
      <tr>
        {children}
      </tr>
    </StyledTableHeader>
  );
};