import { useParams } from '@tanstack/react-router';
import { useCallback, useEffect, useRef, useState } from 'react';

import * as Styles from './Transcripts.styles';
import useTranscript from './hooks/useTranscript';
import type { Block } from './types';

function Transcripts() {
  const id = useParams({
    from: '/transcripts/$transcriptId',
    select: (params) => params.transcriptId,
  });

  const { transcript, loading, error } = useTranscript(id);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener('timeupdate', handleTimeUpdate);
      audioElement.addEventListener('seeked', handleTimeUpdate);
      return () => {
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
        audioElement.removeEventListener('seeked', handleTimeUpdate);
      };
    }
  }, [audioRef]);

  const handleBlockClick = useCallback((start: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = start;
      audioRef.current.play();
    }
  }, []);

  if (loading) return <TranscriptsSkeleton />;
  if (error) return <p>{error}</p>;

  return (
    <Styles.Container>
      <Styles.TranscriptContainer>
        <h1>{transcript.title}</h1>
        {transcript.blocks.map((block: Block, index: number) => (
          <Styles.Block
            key={index}
            onClick={() => handleBlockClick(block.start)}
            tabIndex={0} // Make the block focusable
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleBlockClick(block.start);
              }
            }}
            role="button"
            aria-pressed={currentTime >= block.start && currentTime < block.end}
          >
            <Styles.HighlightedSpan $isCurrent={currentTime >= block.start && currentTime < block.end}>{block.text}</Styles.HighlightedSpan>
          </Styles.Block>
        ))}
      </Styles.TranscriptContainer>
      <Styles.AudioContainer>
        {transcript.audioUrl ? (
          <Styles.Audio
            ref={audioRef}
            src={transcript.audioUrl}
            controls
            aria-label={`Audio player for ${transcript.title}`}
            onTimeUpdate={() => {
              if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
              }
            }}
            onSeeked={() => {
              if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
              }
            }}
          />
        ) : (
          <p>No audio available</p> // this should be handled by the router
        )}
      </Styles.AudioContainer>
    </Styles.Container>
  );
}

function TranscriptsSkeleton() {
  return (
    <Styles.Container>
      <Styles.TranscriptSkeletonContainer>
        {[0, 1, 2, 3, 4].map((_, index) => (
          <Styles.Skeleton key={index} />
        ))}
      </Styles.TranscriptSkeletonContainer>
      <Styles.AudioContainer>
        <Styles.Skeleton />
      </Styles.AudioContainer>
    </Styles.Container>
  );
}

export default Transcripts;
