import type { LegacyRef } from 'react';
import type { Transcript } from '~pages/Transcripts/types';
import * as Styled from './AudioPlayerComponent.styled';

interface Props {
  transcript: Transcript;
  audioRef: LegacyRef<HTMLAudioElement> | undefined;
  handleTimeUpdates: () => void;
  handleScrubbingTimeUpdates: () => void;
}

const AudioPlayerComponent = ({ transcript, audioRef, handleTimeUpdates, handleScrubbingTimeUpdates }: Props) => {
  return (
    <Styled.AudioContainer>
      {transcript.audioUrl ? (
        <Styled.Audio
          tabIndex={1} // prioritise tabbing before transcript blocks - accessibility
          ref={audioRef}
          src={transcript.audioUrl}
          controls
          aria-label={`Audio player for ${transcript.title}`}
          onTimeUpdate={handleTimeUpdates}
          onSeeked={handleScrubbingTimeUpdates}
        />
      ) : (
        <p>Sorry, there is no audio available</p>
      )}
    </Styled.AudioContainer>
  );
};

export default AudioPlayerComponent;
