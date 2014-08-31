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

(function() {
	'use strict';

	/**
	* FUNCTION: isFloat( value )
	*	Validates if a value is a float.
	*
	* @param {Number} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is a float
	*/
	function isFloat( value ) {
		if ( typeof value !== 'number' || value !== value ) {
			return false;
		}
		return ( value !== ( value | 0 ) );
	} // end FUNCTION isFloat()


	// EXPORTS //

	module.exports = isFloat;

})();