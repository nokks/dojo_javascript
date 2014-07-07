/*global describe, it */
'use strict';

(function () {
    describe('Calculator', function () {
        describe('should ', function () {
        	it(' return zero for empty string ', function (string) {

        	var	string = "";

        	var calculator = new Calculator();

        	var answer = calculator.Add(string)
        	
        	expect(answer).toEqual(0);

        	});
        	
        	it('return number for one string', function (string) {

        		var string = "1";

        		var calculator = new Calculator();
        		
        		var answer = calculator.Add(string);

        		expect(answer).toEqual(1);
        	});
            												 
        });
    });
})();
