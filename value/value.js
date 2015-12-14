
var getValue = function(value){
	console.log("typeof value: " + typeof value);
	if(typeof value != 'function'){
		return value;
	}
	
	if(typeof value == 'function'){
	 console.log("I am a function");
	  var temp = value();
	  console.log("typeof temp: " + typeof temp);
	  if(typeof temp != 'function'){
	     return temp;
	  }else{
		temp = getValue(temp());
		if(typeof temp != 'function'){
			return temp;
		}
	  }
	}
};


module.exports = getValue;