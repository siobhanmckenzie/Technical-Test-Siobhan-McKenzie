import { useEffect, useState } from 'react';
import type { Transcript } from '../types';

const useTranscript = (id: string) => {
  const [transcript, setTranscript] = useState<Transcript>({ audioUrl: '', blocks: [], title: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // if in prod - discuss caching and attaching this to the routing

  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        const response = await fetch(`https://frontend-challenge-backend.vercel.app/api/transcripts/${id}`);
        if (response.ok) {
          const data: Transcript = await response.json();
          setTranscript(data);
          setLoading(false);
        } else {
          setError('Sorry, we were unable to fetch that transcript. Please try another transcript, or contact support.'); // Note: should handle this better
          setLoading(false);
        }
      } catch (error) {
        setError('Sorry, there has been an error fetching that transcript. Please try another transcript, or contact support.');
        setLoading(false);
      }
    };

    if (id) {
      fetchTranscript();
    }
  }, [id]);

  return { error, loading, transcript };
};

export default useTranscript;
