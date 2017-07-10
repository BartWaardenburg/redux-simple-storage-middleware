'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createStorageMiddleware = undefined;

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This variable stores whether it's possible to use the storage
 */
var storagePossible = void 0;

/**
 * This middleware for redux will store the application state in storage
 * @param  settings         An object containing the settings for the middleware
 * @param  settings.key     The identifier to be used to store state in storage
 * @param  settings.type    The type of storage to use either sessionStorage or localStorage
 * @param  settings.exclude The reducers to exclude from storing
 * @return                  The final result when all reducers have run
 */
var createStorageMiddleware = exports.createStorageMiddleware = function createStorageMiddleware(_ref) {
	var key = _ref.key,
	    _ref$type = _ref.type,
	    type = _ref$type === undefined ? 'sessionStorage' : _ref$type,
	    exclude = _ref.exclude;
	return function (store) {
		return function (next) {
			return function (action) {
				var result = next(action);
				var state = store.getState();

				if (exclude) {
					state = (0, _lodash2.default)(state, exclude);
				}

				if (storagePossible === undefined) {
					storagePossible = (0, _utils.storageTest)(type);
				}

				if (storagePossible) {
					if (type === 'sessionStorage') {
						window.sessionStorage.setItem(key, JSON.stringify(state));
					}

					if (type === 'localStorage') {
						window.localStorage.setItem(key, JSON.stringify(state));
					}
				}

				return result;
			};
		};
	};
};

exports.default = createStorageMiddleware;