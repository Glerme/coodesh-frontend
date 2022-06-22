export interface Meanings {
  partOfSpeech: string;
  definitions: {
    definition: string;
    synonyms: {}[];
    antonyms: {}[];
    example: string;
  };
  synonyms: string[];
  antonyms: string[];
}
