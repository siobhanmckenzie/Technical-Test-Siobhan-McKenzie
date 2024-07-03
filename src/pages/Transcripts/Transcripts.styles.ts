import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const Skeleton = styled.div`
  width: 100%;
  height: 30px;
  background: #f6f7f8;
  background-image: linear-gradient(to right, #eeeeee 0%, #dddddd 50%, #eeeeee 100%);
  background-repeat: no-repeat;
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite;
  border-radius: 4px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100vh;
`;

export const TranscriptContainer = styled.div`
  padding: 24px;
  overflow-y: auto;
`;

export const TranscriptSkeletonContainer = styled(TranscriptContainer)`
  display: grid;
  align-content: start;
  gap: 12px;
`;

export const AudioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.LIGHT_GRAY};
`;

export const Audio = styled.audio`
  width: 100%;
`;

interface Props {
  $isCurrent: boolean;
}

export const Block = styled.p`
  color: ${({ theme }) => theme.colors.TEXT};
  width: fit-content;
  border-radius: 4px;
`;

export const HighlightedSpan = styled.span<Props>`
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
