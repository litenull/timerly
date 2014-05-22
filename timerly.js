/*
	super cool timer wrapper
*/

function parseRange(string) {
	var entryArray = string.split(' ');

	for (i=0; i<=entryArray.length-1; i++) {
		console.log(entryArray[i]);
	}
}


var timer = function(func) {
	this._func = func;
};

timer.prototype.setDelay = function(delay) {
	this._delay = delay;
}

timer.prototype.start = function() {
	this._interval = setInterval(this._func, this._delay);
}

timer.prototype.stop = function() {
	clearInterval(this._interval);
}

timer.prototype.crontab = function() {

}

exports.timer = timer;