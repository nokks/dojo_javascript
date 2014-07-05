var Calculator = function (result) {
		this.result = result;
		return this;
	};

	Calculator.prototype = {
		
		Add: function (string1, string2) {
			var sum = parseInt(string1) + parseInt(string2); 
			return sum;
			
		}

	};
