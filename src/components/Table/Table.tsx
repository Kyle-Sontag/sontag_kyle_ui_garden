import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

interface StyledTableProps {
  $disabled?: boolean;
  $backgroundColor?: string;
}

const StyledTable = styled.table<StyledTableProps>`
  background-color: ${props =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#ffffff'};
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'default')};
  opacity: ${props => (props.$disabled ? 0.6 : 1)};
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Table: React.FC<TableProps> = ({
  disabled = false,
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <StyledTable
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      data-testid="table"
      {...props}
    >
      {children}
    </StyledTable>
  );
};
