import { words } from '../../lib';

describe('test various methods of "words"', () => {
  it('wordCount => give us a word count', () => {
    expect(words.wordCount('This sentence has 4 words.')).toBe(4);
    expect(words.wordCount('This sentence has five words.')).toBe(5);
    expect(
      words.wordCount(
        'Try something with, you know, complexity. This will be more difficult! Will it work?'
      )
    ).toBe(14);
  });

  it('specificWordCount => takes a string and a word and returns the number of times that word is in the string', () => {
    expect(words.specificWordCount('This word has word word.', 'word')).toBe(3);
    expect(
      words.specificWordCount('Maybe-this will, trip it up! Will it? We WILL see.', 'will')
    ).toBe(3);
    expect(
      words.specificWordCount('Maybe-this will, trip it up! Will it? We WILL see.', 'will', true)
    ).toBe(1);
  });
});
