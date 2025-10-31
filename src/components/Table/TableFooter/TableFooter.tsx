import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

interface StyledTableFooterProps {
  $disabled?: boolean;
  $backgroundColor?: string;
}

const StyledTableFooter = styled.tfoot<StyledTableFooterProps>`
  background-color: ${props =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#f0f0f0'};
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'default')};
  opacity: ${props => (props.$disabled ? 0.6 : 1)};
  font-weight: bold;

  td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 14px;

    td {
      padding: 8px;
    }
  }
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  disabled = false,
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <StyledTableFooter
      $disabled={disabled}
      $backgroundColor={backgroundColor}
      data-testid="table-footer"
      {...props}
    >
      <tr>{children}</tr>
    </StyledTableFooter>
  );
};
