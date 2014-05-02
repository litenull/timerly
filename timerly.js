/*
	Simple execution timer queue

*/


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

exports.timer = timer;