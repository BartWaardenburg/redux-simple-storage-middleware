/* @flow */
import omit from 'lodash.omit';

import {storageTest} from './utils';

/**
 * This variable stores whether it's possible to use the storage
 */
let storagePossible: ?boolean;

/**
 * This middleware for redux will store the application state in storage
 * @param  settings         An object containing the settings for the middleware
 * @param  settings.key     The identifier to be used to store state in storage
 * @param  settings.type    The type of storage to use either sessionStorage or localStorage
 * @param  settings.exclude The reducers to exclude from storing
 * @return                  The final result when all reducers have run
 */
export const createStorageMiddleware = ({
	key,
	type = 'sessionStorage',
	exclude,
}: {
	key: string,
	type: string,
	exclude: Array<string>,
}) => (store: Object) => (next: Function) => (action: Object) => {
	const result: Object = next(action);
	let state = store.getState();

	if (exclude) {
		state = omit(state, exclude);
	}

	if (storagePossible === undefined) {
		storagePossible = storageTest(type);
	}

	if (storagePossible) {
		if (type === 'sessionStorage') {
			sessionStorage.setItem(key, JSON.stringify(state));
		}

		if (type === 'localStorage') {
			localStorage.setItem(key, JSON.stringify(state));
		}
	}

	return result;
};

export default createStorageMiddleware;
