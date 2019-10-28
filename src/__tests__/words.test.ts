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

  it('capitalize => Takes a string and returns the string with the first character capitalized', () => {
    expect(words.capitalize('test')).toBe('Test');
    expect(words.capitalize('teSt')).toBe('TeSt');
    expect(words.capitalize('TeSt')).toBe('TeSt');
    /* tslint:disable */
    // @ts-ignore
    expect(words.capitalize(true)).toBe(null);
    // @ts-ignore
    expect(words.capitalize(5)).toBe(null);
    /* tslint:enable */
  });

  it('replaceWord => Takes 3 to 4 arguments (original string, string to be replaced, string to replace with, and optional boolean for case sensitivity) and returns original string with replacements made', () => {
    const test =
      'We hope this works because we put some serious work into this and we are invested.';
    expect(words.replaceWord(test, 'we', 'they', true)).toBe(
      'They hope this works because they put some serious work into this and they are invested.'
    );
    expect(words.replaceWord(test, 'we', 'they')).toBe(
      'they hope this works because they put some serious work into this and they are invested.'
    );
    /* tslint:disable */
    // @ts-ignore
    expect(words.replaceWord(test, 5, 'they')).toBe(null);
    /* tslint:enable */
  });
});
