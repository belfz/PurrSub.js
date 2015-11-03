var PurrSub = require('../PurrSub');

describe('PurrSub - a very simple event emitter', function () {
	'use strict';
	
	var instance;
	
	beforeEach(function () {
		instance = new PurrSub();
	});
	
	it('should have \'subscribe\' method defined', function () {
		expect(instance.subscribe).toBeDefined();
	});
	
	it('should have \'unsubscribe\' method defined', function () {
		expect(instance.unsubscribe).toBeDefined();
	});
	
	it('should have \'publish\' method defined', function () {
		expect(instance.publish).toBeDefined();
	});
	
	describe('subscribing', function () {
		var callback1, callback2;
		var param = {property: 'prop'};
		
		beforeEach(function () {
			callback1 = jasmine.createSpy();
			callback2 = jasmine.createSpy();
		});
		
		it('should call the only subscribed callback (with param)', function () {
			instance.subscribe('event', callback1);
			instance.publish('event', param);
			
			expect(callback1).toHaveBeenCalledWith(param);
		});
		
		it('should call multiple subscribed callbacks (with param)', function () {		
			instance.subscribe('event', callback1);
			instance.subscribe('event', callback2);
			instance.publish('event', param);
			
			expect(callback1).toHaveBeenCalledWith(param);
			expect(callback2).toHaveBeenCalledWith(param);
		});
		
		it('should not call the non-subscribed callback', function () {
			instance.publish('event');
			
			expect(callback1).not.toHaveBeenCalled();
		});
		
		it('should unsubscribe the subscribed callback and not call it when event is published', function () {
			instance.subscribe('event', callback1);
			instance.unsubscribe('event', callback1);
			instance.publish('event');
			
			expect(callback1).not.toHaveBeenCalled();
		});
		
		it('should unsubscribe even when there were multiple attempts to subscribe with the same callback', function () {
			instance.subscribe('event', callback1);
			instance.subscribe('event', callback1);
			instance.unsubscribe('event', callback1);
			instance.publish('event');
			
			expect(callback1).not.toHaveBeenCalled();
		});
	});
});