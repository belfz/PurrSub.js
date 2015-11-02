(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
			global.toastit = factory();
} (this, function () {
	'use strict';

	var PubSub = function () {
		var events = {};

		this.subscribe = function (eventName, callback) {
			if (!events[eventName]) {
				events[eventName] = [];
			}
			if (events[eventName].indexOf(callback) === -1) {
				events[eventName].push(callback);
			}
		};

		this.publish = function (eventName, param) {
			if (events[eventName] && events[eventName].length) {
				events[eventName].forEach(function (callback) {
					callback(param);
				});
			}
		};

		this.unsubscribe = function (eventName, callback) {
			if (events[eventName] && events[eventName].length) {
				var callbackIndex = events[eventName].indexOf(callback);
				if (callbackIndex > -1) {
					events[eventName].splice(callbackIndex, 1);
				}
			}
		}
	};

	return PubSub;
}));