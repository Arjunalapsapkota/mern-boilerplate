const sum = require("../server/server.js");

const assert = require("chai").assert;

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });
describe("app", () => {
  it("app should return hello", () => {
    assert.equal(sum(2, 2), 4);
  });
});
