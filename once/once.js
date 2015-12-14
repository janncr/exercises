var _ = require("underscore");

var once = function(method){
	return _.once(method);
};


module.exports = once;