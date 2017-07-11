/* @flow */
import {storageTest} from './utils';

/**
 * This will get the application state from storage when available
 * @param  settings                Object containing all settings for the state retreival
 * @param  settings.key            The identifier to be used to retreive state from storage
 * @param  settings.type           The type of storage to use either sessionStorage or localStorage
 * @param  settings.defaultReponse The response to give when no storage can be used or if their is nothing available
 * @return                         The state last stored in storage
 */
export const getStorageState = ({
	key,
	type = 'sessionStorage',
	defaultReponse,
}: {
	key: string,
	type: string,
	defaultReponse: any
}): any => {
	if (storageTest(type)) {
		let data: ?string;

		if (type === 'localStorage') {
			data = window.localStorage.getItem(key);
		}

		if (type === 'sessionStorage') {
			data = window.sessionStorage.getItem(key);
		}

		return data ? {
			...defaultReponse,
			...JSON.parse(data),
		} : defaultReponse;
	} else {
		return defaultReponse;
	}
};
