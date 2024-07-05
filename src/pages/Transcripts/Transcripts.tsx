import { useParams } from '@tanstack/react-router';
import { useCallback, useRef, useState } from 'react';

import * as Styles from './Transcripts.styles';

import { AudioPlayerComponent } from './components/AudioPlayerComponent';
import TranscriptBlockComponent from './components/TranscriptBlockComponent/TranscriptBlockComponent';
import useTranscript from './hooks/useTranscript';

const Transcripts = () => {
  const id = useParams({
    from: '/transcripts/$transcriptId',
    select: (params) => params.transcriptId,
  });

  const { transcript, loading, error } = useTranscript(id);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const activeBlockRef = useRef<HTMLDivElement | null>(null);

  const handleBlockClick = useCallback((start: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = start;
      audioRef.current.play();
    }
  }, []);

  const handleScrubbingTimeUpdates = useCallback(() => {
    if (activeBlockRef.current) {
      activeBlockRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  const handleTimeUpdates = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  if (loading) return <TranscriptsSkeleton />;
  if (error)
    return (
      <p>
        Sorry, we were unable to fetch that transcript. Please try again later, or{' '}
        <a href="mailto:team@9fin.com">Click here to email 9fin support</a>
      </p>
    );

  return (
    <Styles.Container>
      <TranscriptBlockComponent
        transcript={transcript}
        handleBlockClick={handleBlockClick}
        currentTime={currentTime}
        activeBlockRef={activeBlockRef}
      />
      <AudioPlayerComponent
        transcript={transcript}
        audioRef={audioRef}
        handleTimeUpdates={handleTimeUpdates}
        handleScrubbingTimeUpdates={handleScrubbingTimeUpdates}
      />
    </Styles.Container>
  );
};

const TranscriptsSkeleton = () => {
  return (
    <Styles.Container>
      <Styles.TranscriptSkeletonContainer>
        {[0, 1, 2, 3, 4].map((_, index) => (
          <Styles.Skeleton key={index} />
        ))}
      </Styles.TranscriptSkeletonContainer>
      <Styles.AudioSkeletonContainer>
        <Styles.Skeleton />
      </Styles.AudioSkeletonContainer>
    </Styles.Container>
  );
};

export default Transcripts;
