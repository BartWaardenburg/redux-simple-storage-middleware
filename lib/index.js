'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _middleware = require('./middleware');

Object.defineProperty(exports, 'default', {
	enumerable: true,
	get: function get() {
		return _interopRequireDefault(_middleware).default;
	}
});
Object.defineProperty(exports, 'createStorageMiddleware', {
	enumerable: true,
	get: function get() {
		return _middleware.createStorageMiddleware;
	}
});

var _state = require('./state');

Object.defineProperty(exports, 'getStorageState', {
	enumerable: true,
	get: function get() {
		return _state.getStorageState;
	}
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }