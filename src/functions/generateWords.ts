import randomWords from "random-words";

export const generateWords = (numberOfWords: number) => {
  const words = randomWords(numberOfWords);

  return words;
};
