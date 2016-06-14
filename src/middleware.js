import {storageTest} from './utils';

/**
 * This variable stores whether it's possible to use the storage
 */
let storagePossible: ?boolean;

/**
 * This middleware for redux will store the application state in session storage
 * @param  name The identifier to be used to retreive state from session storage
 * @return      The final result when all reducers have been run
 */
export const createSessionStorageMiddleware = ({
  key,
  type = 'sessionStorage',
}: {
  key: string,
  type: string,
}) => (store: Object) => (next: Function) => (action: Object) => {
	const result: Object = next(action);

  if (storagePossible === undefined) {
    storagePossible = storageTest(type);
  }

  if (storagePossible) {
    if (type === 'sessionStorage') {
      sessionStorage.setItem(key, JSON.stringify(store.getState()));
    }

    if (type === 'localStorage') {
      localStorage.setItem(key, JSON.stringify(store.getState()));
    }
  }

	return result;
};
