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
	fname: {
		type: String,
		default: '',
		required: 'Please fill Person First Name',
		trim: true
	},
    mname: {
		type: String,
		default: '',
		required: 'Please fill Person Middle Name',
		trim: true
	},
    lname: {
		type: String,
		default: '',
		required: 'Please fill Person Last Name',
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
    
    dod: {
		type: String,
		default: '',
		required: 'Please fill Person Date of Death',
		trim: true
	},
    publishedWorks: {
        type: Array,
        default: '',
        trim: true
    },
    wellKnownMilestones: {
        type: Array,
        default: '',
        trim: true
    },
    creativeMovementsFounded: {
        type: Array,
        default: '',
        trim: true
    },
    acclaimedProfessions: {
        type: Array,
        default: '',
        trim: true
    },
    notableWorks: {
        type: Array,
        default: '',
        trim: true
    },
    locationsLived: {
        type: Array,
        default: '',
        trim: true
    },
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
    
    //Positioning
    x: {
        type: Number,
        default: 0
    },
    y: {
        type: Number,
        default: 0
    },
    
    //Node Number
    nodeNumber: {
        type: String,
        required: 'Please fill Node Number',
        default: '',
        trim: true
    },
    
    nodeNumList: {
        type: Array,
        default: 'EMPTY',
        trim: true
    }
});

mongoose.model('Person', PersonSchema);