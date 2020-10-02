export const hackerSpeak = words => {
  const replacements = {
    a: '4',
    e: '3',
    i: '1',
    o: '0',
    s: '5',
    A: '4',
    E: '3',
    I: '1',
    O: '0',
    S: '5',
  };
  return words.replace(/a|e|i|o|s/gi, char => replacements[char]);
};
