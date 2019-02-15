// function that will take in a string, split it, sort it and join it back to give a string
function capString(str) {
  var arr = str.split("");
  var newArr = arr.sort().join("");
  return newArr;
}

test("checking the function works", () => {
  const actual = capString("cat");
  const expected = "act";
  console.log(actual);
  expect(actual).toBe(expected);
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
