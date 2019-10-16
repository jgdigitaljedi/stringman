function isValid(str: string, exp: RegExp): boolean {
  if (typeof str !== 'string') {
    return false;
  }
  return exp.test(str);
}

function swap(str: string, str2: string, exp: RegExp): string {
  if (str && str2 && exp) {
    return str.replace(exp, str2);
  } else {
    return '';
  }
}

const common = {
  isValid,
  swap
};

export { common };
