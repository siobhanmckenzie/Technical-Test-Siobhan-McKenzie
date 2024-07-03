import { useMatch } from '@tanstack/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Styles from './Transcripts.styles';

interface Block {
  start: number;
  end: number;
  text: string;
}

interface Transcript {
  title: string;
  blocks: Block[];
  audioUrl: string;
}

const Transcripts: React.FC = () => {
  const match = useMatch({ from: '/transcripts/$id' });
  const { id } = match.params as { id: string };

  const [transcript, setTranscript] = useState<Transcript>({ title: '', blocks: [], audioUrl: '' });
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // potential extension - jump to the scrubbed transcript as it's often down out of sight

  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        const response = await fetch(`https://frontend-challenge-backend.vercel.app/api/transcripts/${id}`);
        if (response.ok) {
          const data: Transcript = await response.json();
          setTranscript(data);
        } else {
          console.error('Invalid ID or fetch error');
        }
      } catch (error) {
        console.error('Error fetching transcript:', error);
      }
    };

    if (id) {
      fetchTranscript();
    }
  }, [id]);

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

  // could make these into helpers as no longer using react-howler

  return (
    <Styles.Container>
      <Styles.TranscriptContainer>
        <h1>{transcript.title}</h1>
        {transcript.blocks.map((block, index) => (
          <Styles.Block // needs refactoring
            key={index}
            $isCurrent={currentTime >= block.start && currentTime < block.end}
            onClick={() => handleBlockClick(block.start)}
          >
            {block.text}
          </Styles.Block>
        ))}
      </Styles.TranscriptContainer>
      <Styles.AudioContainer>
        {transcript.audioUrl ? (
          <Styles.Audio
            ref={audioRef}
            src={transcript.audioUrl}
            controls
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
};

export default Transcripts;
