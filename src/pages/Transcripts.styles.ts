import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100vh;
`;

export const TranscriptContainer = styled.div`
  padding: 24px;
  overflow-y: auto;
`;

export const AudioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.LIGHTGRAY};
`;

export const Audio = styled.audio`
  width: 100%;
`;

interface Props {
  $isCurrent: boolean;
}

export const Block = styled.p<Props>`
  color: ${({ theme }) => theme.colors.TEXT};
  background-color: ${({ $isCurrent, theme }) => ($isCurrent ? theme.colors.YELLOW : 'transparent')};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.BLUE};
  }
`;
