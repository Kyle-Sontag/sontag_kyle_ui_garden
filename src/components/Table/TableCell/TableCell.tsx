import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

interface StyledTableCellProps {
  $disabled?: boolean;
  $backgroundColor?: string;
}

const StyledTableCell = styled.td<StyledTableCellProps>`
  background-color: ${props => props.$disabled ? '#cccccc' : props.$backgroundColor || 'transparent'};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'default'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const TableCell: React.FC<TableCellProps> = ({disabled = false, backgroundColor, children, ...props}) => {
  return (
    <StyledTableCell
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      data-testid="table-cell"
      {...props}
    >
      {children}
    </StyledTableCell>
  );
};