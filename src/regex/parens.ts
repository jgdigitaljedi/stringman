const parens = {
  remove: (str: string): string => {
    return str.replace(/ *\([^)]*\) */g, '').trim();
  },
  inside: (str: string): string[] | null => {
    const matched = str.match(/\(([^()]+)\)/g);
    return matched ? matched.map(m => m.replace('(', '').replace(')', '')) : null;
  }
};

export { parens };
