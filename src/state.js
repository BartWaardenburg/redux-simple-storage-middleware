import {storageTest} from './utils';

/**
 * This will get the application state from storage when available
 * @param  key            The identifier to be used to retreive state from session storage
 * @param  type           The type of storage to use either sessionStorage or localStorage
 * @param  defaultReponse The response to give when no storage can be used or if their is nothing available
 * @return                The state last stored in storage
 */
export const getStorageState = ({
  key,
  type = 'sessionStorage',
  defaultReponse,
}: {
  key: string,
  type: string,
  defaultReponse: any
}) => {
  if (storageTest(type)) {
    let data: ?string;

    if (type === 'localStorage') {
      data = localStorage.getItem(key);
    }

    if (type === 'sessionStorage') {
      data = sessionStorage.getItem(key);
    }

    return data ? JSON.parse(data) : defaultReponse;
  } else {
    return defaultReponse;
  }
};
