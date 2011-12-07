/*
----------------------------------------

Train Matrix jQuery Plugin

	by Jedidiah Broadbent
	http://jedidiah.eu/

	October 2009

----------------------------------------

	Inspired by the post by Aegir Hallmundur at
	http://ministryoftype.co.uk/words/article/serene_infoboards/

----------------------------------------

	TODO : Set Board Length
	TODO : Animate Overflow and Transitions
	TODO : Add in extra row above for diacritics eg. ö
	TODO : Build Matrix from Array or List with each item as a 'screen'
	TODO : Add options for controlling background colour
	TODO : Support for character entities eg: &rsquo;
	TODO : Support for nested tags

----------------------------------------
*/
$.fn.trainmatrix = function(options) {
// Default Settings
	var defaults = {
		matrixText: this.html()
	};

	var opts = $.extend(defaults, options);

	// charToMatrix : Takes an individual char and returns the grid for that letter
	function charToMatrix(theChar){
		
		// What kind of char is it?
		switch(theChar){
		switch(theChar.toString()){
		case '&': theClassChar='punc_amp'; theChar='&amp;'; break;
		case '!': theClassChar='punc_exc'; break;
		case '.': theClassChar='punc_period'; break;
		case ',': theClassChar='punc_comma'; break;
		case '"': theClassChar='punc_sdquo'; break;
		case "'": theClassChar='punc_rsquo'; break;
		case '“': theClassChar='punc_ldquo'; break;
		case '”': theClassChar='punc_rdquo'; break;
		case '•': theClassChar='punc_bull'; break;
		case '*': theClassChar='punc_star'; break;
		case '^': theClassChar='punc_carrot'; break;
		case '=': theClassChar='punc_equals'; break;
		case '+': theClassChar='punc_plus'; break;
		case '-': theClassChar='punc_minus'; break;
		case '_': theClassChar='punc_under'; break;
		case '/': theClassChar='punc_slash'; break;
		case '\\':theClassChar='punc_bslash'; break;
		case '<': theClassChar='punc_gt'; break;
		case '>': theClassChar='punc_lt'; break;
		case '£': theClassChar='punc_pound'; break;
		case '@': theClassChar='punc_at'; break;
		case '(': theClassChar='punc_obrac'; break;
		case ')': theClassChar='punc_cbrac'; break;
		case '[': theClassChar='punc_obrac'; break;
		case ']': theClassChar='punc_cbrac'; break;
		case '{': theClassChar='punc_ocbrac'; break;
		case '}': theClassChar='punc_ccbrac'; break;
		case ':': theClassChar='punc_colo'; break;
		case ';': theClassChar='punc_scolo'; break;
		
		default: theClassChar='let_'+theChar;
			
		}
		
		// Return the markup for the char
		return '<span class="letter '+theClassChar.toLowerCase()+'"><span class="col1"><span class="row1">'+theChar+'</span><span class="row2"></span><span class="row3"></span><span class="row4"></span><span class="row5"></span></span><span class="col2"><span class="row1"></span><span class="row2"></span><span class="row3"></span><span class="row4"></span><span class="row5"></span></span><span class="col3"><span class="row1"></span><span class="row2"></span><span class="row3"></span><span class="row4"></span><span class="row5"></span></span></span>';
	}
	
	// convertToMatrix : Takes a string and passes each char to charToMatrix() then returns the string of grids
	function convertToMatrix(theString){
		var replacementString = '';
		$.each(theString, function(index) {
			replacementString += charToMatrix(this);
		});
		return replacementString;
	}

	// Takes the element and replaces it's content with the charecters as grids
	this.html(convertToMatrix(opts.matrixText));
	
	// Returns The jQuery Object
	return this;
};