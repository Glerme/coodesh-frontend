import { Meanings } from "types/Meaning";

interface WordMeaningProps {
  meaning: Meanings[];
}

export const WordMeaning: React.FC<WordMeaningProps> = ({ meaning }) => {
  return (
    <div>
      {meaning?.map((meaning, i) => (
        <div key={i}>
          <p>{meaning?.partOfSpeech} - </p>
          <p>{meaning?.antonyms.map((antonym) => antonym)} -</p>
          <p>{meaning?.synonyms.map((synonym) => synonym)} -</p>
          <p>
            {meaning?.definitions.map((definition) => definition.definition)}
          </p>
        </div>
      ))}
    </div>
  );
};
