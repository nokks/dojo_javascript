var Calculator = function (result) {
		this.result = result;
	
	};

	Calculator.prototype = {

		Add: function(string) {
			if(string == "") 
				{ return 0; }
			else
			 {
			    return parseInt(string);   }
			} 
	
	};
