'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Person = mongoose.model('Person');

/**
 * Globals
 */
var user, person;

/**
 * Unit tests
 */
describe('Person Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			person = new Person({
				fname: 'New',
                mname: 'Kind',
                lname: 'Person',
                pob: 'Columbia, MD',
                dob: '11/11/45',
                dod: '11/11/45',
                nodeNumber: 0,
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return person.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

        it('should be able to show an error when try to save without first name', function(done) { 
			person.fname = '';

			return person.save(function(err) {
				should.exist(err);
				done();
			});
		});
        
        it('should be able to show an error when try to save without middle name', function(done) { 
			person.mname = '';

			return person.save(function(err) {
				should.exist(err);
				done();
			});
		});
        
		it('should be able to show an error when try to save without last name', function(done) { 
			person.lname = '';

			return person.save(function(err) {
				should.exist(err);
				done();
			});
		});
        
        it('should be able to show an error when try to save without pob', function(done) { 
			person.pob = '';

			return person.save(function(err) {
				should.exist(err);
				done();
			});
		});
        
        it('should be able to show an error when try to save without dob', function(done) { 
			person.dob = '';

			return person.save(function(err) {
				should.exist(err);
				done();
			});
		});
        
        it('should be able to show an error when try to save without dod', function(done) { 
			person.dod = '';

			return person.save(function(err) {
				should.exist(err);
				done();
			});
		});
        
        it('should be able to show an error when try to save without node number', function(done) { 
			person.nodeNumber = '';

			return person.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		Person.remove().exec();
		User.remove().exec();

		done();
	});
});