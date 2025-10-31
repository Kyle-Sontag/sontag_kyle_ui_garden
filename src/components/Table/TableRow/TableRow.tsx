import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

interface StyledTableRowProps {
  $disabled?: boolean;
  $backgroundColor?: string;
}

const StyledTableRow = styled.tr<StyledTableRowProps>`
  background-color: ${props =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || 'transparent'};
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'default')};
  opacity: ${props => (props.$disabled ? 0.6 : 1)};

  &:hover {
    background-color: ${props => (props.$disabled ? '#cccccc' : '#f5f5f5')};
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TableRow: React.FC<TableRowProps> = ({
  disabled = false,
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <StyledTableRow
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      data-testid="table-row"
      {...props}
    >
      {children}
    </StyledTableRow>
  );
};
