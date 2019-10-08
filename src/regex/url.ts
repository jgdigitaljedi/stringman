const urlStr = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;

const url = {
  retrieve: (str: string): string[] | null => {
    return str.match(urlStr); // @TODO: rethink this as this doesn't do it
  },
  isValid: (str: string): boolean => {
    return urlStr.test(str);
  }
};

export { url };
