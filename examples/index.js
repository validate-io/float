'use strict';

var isFloat = require( './../lib' );

console.log( isFloat( 5.256 ) );
// returns true

console.log( isFloat( 5 ) );
// returns false