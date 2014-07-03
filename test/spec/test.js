/*global describe, it */
'use strict';

(function () {
    describe('Calculator', function () {
        describe('should add', function () {
						
            it('two strings', function () {
			
			var string1= "1";
			var string2= "2";
			
			var calculator = new Calculator();
			
			var result = calculator.Add(string1, string2);
		
			expect(result).toEqual(3);
			
            });
												 
        });
    });
})();
