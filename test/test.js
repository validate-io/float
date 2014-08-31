
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isFloat = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-float', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( isFloat ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isFloat( 5.5 ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
				5,
				true,
				[],
				'5',
				function(){},
				null,
				{},
				NaN,
				undefined
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isFloat( values[i] ) );
		}
	});

});