'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getStorageState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('./utils');

/**
 * This will get the application state from storage when available
 * @param  settings                Object containing all settings for the state retreival
 * @param  settings.key            The identifier to be used to retreive state from storage
 * @param  settings.type           The type of storage to use either sessionStorage or localStorage
 * @param  settings.defaultReponse The response to give when no storage can be used or if their is nothing available
 * @return                         The state last stored in storage
 */
var getStorageState = exports.getStorageState = function getStorageState(_ref) {
	var key = _ref.key,
	    _ref$type = _ref.type,
	    type = _ref$type === undefined ? 'sessionStorage' : _ref$type,
	    defaultReponse = _ref.defaultReponse;

	if ((0, _utils.storageTest)(type)) {
		var data = void 0;

		if (type === 'localStorage') {
			data = window.localStorage.getItem(key);
		}

		if (type === 'sessionStorage') {
			data = window.sessionStorage.getItem(key);
		}

		return data ? _extends({}, defaultReponse, JSON.parse(data)) : defaultReponse;
	} else {
		return defaultReponse;
	}
};