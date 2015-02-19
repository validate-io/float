/**
*
*	VALIDATE: float
*
*
*	DESCRIPTION:
*		- Validates if a value is a float.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isNumber = require( 'validate.io-number' );


// ISFLOAT //

/**
* FUNCTION: isFloat( value )
*	Validates if a value is a float.
*
* @param {Number} value - value to be validated
* @returns {Boolean} boolean indicating whether value is a float
*/
function isFloat( value ) {
	if ( isNumber( value ) ) {
		return ( value%1 !== 0 );
	}
	return false;
} // end FUNCTION isFloat()


// EXPORTS //

module.exports = isFloat;
