export interface Block {
  start: number;
  end: number;
  text: string;
}

export interface Transcript {
  title: string;
  blocks: Block[];
  audioUrl: string;
}
