describe('findReplace', function() {

	it("takes a string, finds a word in that string and replaces it with another word", function() {
		expect(findReplace("I love to baseball. Baseball is an amazing sport.", "baseball", "Football")).to.equal("I love to Football. Football is an amazing sport.");
	});
});
