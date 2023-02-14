import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  position: absolute;
  color: ${({ theme }) => theme.colors.font};
  opacity: 0.7;
  a {
    text-decoration: none;
    display: block;
    &:hover {
      opacity: 1;
    }
  }
`;
