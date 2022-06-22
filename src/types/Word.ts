import { License } from "./License";
import { Meanings } from "./Meaning";
import { Phonetics } from "./Phonetic";

export interface Word {
  word: string;
  phonetics: Phonetics[];
  meanings: Meanings[];
  license: License;
  sourceUrls: string[];
}
