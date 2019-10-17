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

function remove(str: string, exp: RegExp): string {
  if (typeof str !== 'string') {
    return str;
  }
  return str.replace(exp, '').trim();
}

function retrieve(str: string, exp: RegExp): string[] {
  if (typeof str !== 'string') {
    return [];
  }
  return str.match(exp) || [];
}

const common = {
  isValid,
  remove,
  retrieve,
  swap
};

export { common };
