import { useEffect, useState } from 'react';
import { Transcript } from '../types';

const useTranscript = (id: string) => {
  const [transcript, setTranscript] = useState<Transcript>({ title: '', blocks: [], audioUrl: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        const response = await fetch(`https://frontend-challenge-backend.vercel.app/api/transcripts/${id}`);
        if (response.ok) {
          const data: Transcript = await response.json();
          setTranscript(data);
          setLoading(false);
        } else {
          console.error('Invalid ID or fetch error');
          setError('Invalid ID or fetch error');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching transcript:', error);
        setError('Error fetching transcript');
        setLoading(false);
      }
    };

    if (id) {
      fetchTranscript();
    }
  }, [id]);

  return { transcript, loading, error };
};

export default useTranscript;
