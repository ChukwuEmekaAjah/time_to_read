function parser(words,options){
	/*
		{
			pause:1,
			wpm:200,
			
		}
	*/
	// break the words into an array using space splitting;
	var words_in_text = typeof(words) == 'string'? words.split(' ') : words;
	// punctuations parser
	var punctuation_marks = /\,?;?\-?\??!?\:?\.?\.{3,}?/;
	var punctuation_counters = 0;
	words_in_text.forEach(function(word){
		if(punctuation_marks.test(word)){
			punctuation_counters += 1;
		}
	});
	// we would use the options in the user document
	var wpm = options?options['wpm']?Number(options['wpm']):200:200;
	var pause = options?options['pause']?Number(options['pause']):1:1;
	var time_to_read = words_in_text.length/wpm;
	var time_for_pause = pause * punctuation_counters / 60;
	var total_time = Math.ceil(time_to_read + time_for_pause);
	return total_time;
}