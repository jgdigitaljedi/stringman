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

  it('allWordCount => takes a string, counts the number of occurences of each word in the string, and returns as an object', () => {
    const test = `
    This is my stupid test. It needs to have a few sentences.
    It also needs to have some variation in words, but should repeat some words as well for the sake of getting some good data.
    We'll see how this one works out, but I think it will be fine. Some WORDS are capitalized, some Words are not.
    `;
    const counts = words.allWordCount(test);
    const strict = words.allWordCount(test, true);
    expect(counts.words).toBe(4);
    expect(strict.words).toBe(2);
    expect(counts.some).toBe(5);
    expect(strict.some).toBe(4);
    expect(strict.WORDS).toBe(1);
  });
});
