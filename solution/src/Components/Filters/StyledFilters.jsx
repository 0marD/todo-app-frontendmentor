import styled from 'styled-components';

export const StyledFilters = styled.div`
  display: flex;
  gap: 1.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  opacity: 0.8;

  .filter {
    border: none;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      opacity: 1;
      color: ${({ theme }) => theme.colors.font};
    }
    &--active {
      opacity: 1;
      color: ${({ theme }) => theme.colors.active};
    }
  }
`;

export const StyledFiltersDesk = styled.div`
  display: none;
  gap: 1.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  opacity: 0.8;

  .filter {
    border: none;
    cursor: pointer;
    &:hover {
      transition: color 0.3s;
      color: ${({ theme }) => theme.colors.font};
      opacity: 1;
    }
    &--active {
      opacity: 1;
      color: ${({ theme }) => theme.colors.active};
    }
  }
  @media screen and (min-width: 668px) {
    display: flex;
  }
`;
