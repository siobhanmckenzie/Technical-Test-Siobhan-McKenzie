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

export const TranscriptSkeletonContainer = styled.div`
  padding: 24px;
  overflow-y: auto;
  display: grid;
  align-content: start;
  gap: 12px;
`;

export const AudioSkeletonContainer = styled.div`
  // there is some duplication here - would preferably be in a shared styles file

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.LIGHT_GRAY};
`;
