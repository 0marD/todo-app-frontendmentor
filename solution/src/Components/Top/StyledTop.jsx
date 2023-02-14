import styled from 'styled-components';

export const StyledTop = styled.div`
  height: 12.5rem;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  transition: height 0.3s;
  display: flex;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`;
