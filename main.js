const sum = (x, y) => x - y;
const subtract = (x, y) => x - y;

test("checking the function works", () => {
  const actual = sum(3, 4);
  const expected = 7;
  console.log(actual);
  expect(actual).toBe(expected);
});

test("check the subtract function works", () => {
  const actualSub = subtract(3, 4);
  const expectedSub = -1;
  console.log(actualSub);
  expect(actualSub).toBe(expectedSub);
});

function test(title, callBack) {
  try {
    callBack();
    console.log(`%c ✓ ${title}`, "color: green;");
  } catch (error) {
    console.log(`%c ✓ ${title}`, "color: red;");
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  };
}
