import type { LegacyRef } from 'react';
import type { Block, Transcript } from '~pages/Transcripts/types';
import * as Styled from './TranscriptBlockComponent.styled';

interface Props {
  transcript: Transcript;
  handleBlockClick: (start: number) => void;
  currentTime: number;
  activeBlockRef: LegacyRef<HTMLParagraphElement> | undefined;
}

const TranscriptBlockComponent = ({ transcript, handleBlockClick, currentTime, activeBlockRef }: Props) => {
  return (
    <Styled.TranscriptContainer>
      <h1>{transcript.title}</h1>
      {transcript.blocks.map((block: Block, index: number) => (
        <Styled.Block
          key={index}
          onClick={() => handleBlockClick(block.start)}
          tabIndex={2} // allow tabbing - accessibility
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleBlockClick(block.start);
            }
          }}
          aria-pressed={currentTime >= block.start && currentTime < block.end}
          ref={currentTime >= block.start && currentTime < block.end ? activeBlockRef : null}
        >
          <Styled.HighlightedSpan $isCurrent={currentTime >= block.start && currentTime < block.end}>{block.text}</Styled.HighlightedSpan>
        </Styled.Block>
      ))}
    </Styled.TranscriptContainer>
  );
};

export default TranscriptBlockComponent;
