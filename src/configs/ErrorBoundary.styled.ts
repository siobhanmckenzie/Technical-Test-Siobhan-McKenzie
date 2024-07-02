import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  border: 1px solid red;
  background-color: ${({ theme }) => theme.colors.LIGHTGRAY};
  margin: 20px;
  text-align: center;
`;
