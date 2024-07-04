import styled from 'styled-components';

export const AudioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.LIGHT_GRAY};
`;

export const Audio = styled.audio`
  width: 100%;
`;
