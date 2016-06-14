/* @flow */
/**
 * This will test whether the requested type of storage is available or not
 * @param  type The type of storage to test
 * @return      True or false depending on whether the storage is available or not
 */
export const storageTest = (type: string): boolean => {
  const test: string = 'test';

  try {
    if (type === 'localStorage') {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    }

    if (type === 'sessionStorage') {
      sessionStorage.setItem(test, test);
      sessionStorage.removeItem(test);
      return true;
    }

    return false;
  } catch (e) {
    return false;
  }
};
