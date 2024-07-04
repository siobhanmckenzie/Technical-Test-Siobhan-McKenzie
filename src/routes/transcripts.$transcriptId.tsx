import { createFileRoute } from '@tanstack/react-router';
import { Transcripts } from '~pages/Transcripts';

export const Route = createFileRoute('/transcripts/$transcriptId')({
  component: Transcripts,
});
