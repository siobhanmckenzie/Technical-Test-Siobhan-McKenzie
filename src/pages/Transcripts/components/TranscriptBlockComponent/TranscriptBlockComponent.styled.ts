import styled from 'styled-components';

interface Props {
  $isCurrent: boolean;
}

export const Block = styled.p`
  color: ${({ theme }) => theme.colors.TEXT};
  width: fit-content;
  border-radius: 4px;
`;

export const TranscriptContainer = styled.div`
  padding: 24px;
  overflow-y: auto;
`;

export const HighlightedSpan = styled.span<Props>`
  // this aims to replicate the text-level background highlighting instead of the entire block - it's not perfect
  // (wrapped text has uneven corners - could look into using a clipping mask instead - time boxed this so didn't get to it)

  background-position: top left;
  background-size: 100% auto;
  background-image: linear-gradient(
    to top,
    ${({ $isCurrent, theme }) => ($isCurrent ? theme.colors.YELLOW : 'transparent')} 100%,
    transparent 0
  );
  cursor: pointer;
  padding: 2px;
  border-radius: 4px;
  &:hover {
    background-image: linear-gradient(to top, ${({ theme }) => theme.colors.BLUE} 100%, transparent 0);
    cursor: pointer;
  }
`;
