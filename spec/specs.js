describe('findReplace', function() {

	it("takes a string, finds a word in that string and replaces it with another word", function() {
		expect(findReplace("I love baseball. Baseball is an amazing sport.", "baseball", "Football")).to.equal("I love Football. Football is an amazing sport.");
	});
	
	it("takes a string, finds a word in that string and replaces it with another word", function() {
		expect(findReplace("I love beer. Beer is an amazing.", "beer", "Wine")).to.equal("I love Wine. Wine is an amazing.");
	});
	
	it("takes a string, finds a word in that string and replaces it with another word", function() {
		expect(findReplace("Where are the best restaurants at? I would love to find new restaurants to frequent.", "restaurants", "bars")).to.equal("Where are the best bars at? I would love to find new bars to frequent.");
	});
});
