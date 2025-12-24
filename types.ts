export enum GameView {
  MENU = 'MENU',
  ROULETTE = 'ROULETTE',
  BOMB = 'BOMB',
  NEVER_EVER = 'NEVER_EVER',
  COURT = 'COURT'
}

export interface Player {
  id: string;
  name: string;
}

export interface BombTopic {
  id: string;
  type: 'syllable' | 'topic';
  content: string;
}

export type RouletteCategory = 'ICEBREAKER' | 'HOT' | 'TOXIC' | 'ABSURD';

export interface RouletteTask {
  id: string;
  text: string;
  type: 'dare' | 'truth';
  category: RouletteCategory;
}

export type NeverEverCategory = 'PARTY' | 'DIRTY' | 'GROSS' | 'COUPLES' | 'HARDCORE';

export interface NeverEverQuestion {
  id: string;
  text: string;
  category: NeverEverCategory;
}

export interface CourtQuestion {
  id: string;
  text: string;
}