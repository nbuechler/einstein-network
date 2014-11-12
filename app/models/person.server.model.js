'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Person Schema
 */
var PersonSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Person name',
		trim: true
	},
    pob: {
		type: String,
		default: '',
		required: 'Please fill Person Place of Birth',
		trim: true
	},
    
    dob: {
		type: String,
		default: '',
		required: 'Please fill Person Date of Birth',
		trim: true
	},
    
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Person', PersonSchema);